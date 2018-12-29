import React, { Component } from "react";
import ArrayUtil from "../ArrayUtil";

class PicWaterFall extends Component {
  constructor(props) {
    super(props);
    //记录已收录的图片
    this.currentPics = [];
    //列数
    this.colNum = this.props.colNum || 2;
    this.state = {};
    this.colIndexArr = [];
    for (let i = 1; i <= this.colNum; ++i) {
      this.state["col" + i] = [];
      this.colIndexArr.push(i);
    }
  }

  componentDidMount() {
    this.mount = true;
    this.loadPics(this.props.pics);
  }

  componentWillReceiveProps(nextProps) {
    this.loadPics(nextProps.pics);
  }

  filterPics(opics) {
    let inspectFieldName = "src";
    let pics = [];
    opics.forEach(pic => {
      if (!ArrayUtil.include(this.currentPics, pic, inspectFieldName)) {
        pics.push(pic);
      }
    });
    return pics;
  }

  //串行加载图片，会造成延时!
  async loadPics(pics) {
    if (!pics.length) {
      let tempState = {};
      for (let i = 1; i <= this.colNum; ++i) {
        tempState["col" + i] = [];
      }
      this.setState(tempState);
      this.currentPics = [];
      return;
    }
    pics = this.filterPics(pics);
    this.currentPics = [...this.currentPics, ...pics];

    for (let i = 0; i < pics.length; ++i) {
      await this.loadPicAndMount(pics[i], this.props.prepend);
    }

    if (!pics.length) return;
    //加载完成后,给乐乐的高度
    let height = this.refs.aside.offsetHeight;
    this.props.loadCallback && this.props.loadCallback(height);
  }

  async prePendPics(pics) {
    this.currentPics = [...this.currentPics, ...pics];
    for (let i = 0; i < pics.length; ++i) {
      await this.loadPicAndMount(pics[i], true);
    }
  }

  //加载一张图片并渲染
  loadPicAndMount(pic, isPrePend = false) {
    let src = pic.src;
    let id = pic.id;
    return new Promise((resolve, reject) => {
      let image = new Image();
      this.image = image;
      image.onload = () => {
        if (!this.mount) return;
        let shortestIndex = 1;
        let shortestBottom = 100000000;
        for (let i = 1; i <= this.colNum; ++i) {
          let bottom = this.refs["col" + i].getBoundingClientRect().bottom;
          if (bottom < shortestBottom) {
            shortestIndex = i;
            shortestBottom = bottom;
          }
        }
        let colName = "col" + shortestIndex;
        this.setState(
          {
            [colName]: isPrePend
              ? [{ src, id }, ...this.state[colName]]
              : [...this.state[colName], { src, id }]
          },
          resolve
        );
      };
      image.onerror = resolve;
      image.onabort = resolve;
      image.src = src;
    });
  }

  onScroll() {
    let bottom = this.refs.asideContent.getBoundingClientRect().bottom;
    let parentBottom = this.refs.aside.getBoundingClientRect().bottom;
    if (bottom <= parentBottom + 10) {
      this.props.onScrollBottom && this.props.onScrollBottom();
    }
  }

  componentWillUnmount() {
    this.image && (this.image.src = "");
    this.image && (this.image.onload = undefined);
    this.image && (this.image.onerror = undefined);
    this.image && (this.image.onabort = undefined);
    this.mount = false;
  }

  render() {
    return (
      <aside
        className="img_list"
        style={{ height: this.props.height || "unset" }}
        onScroll={this.onScroll.bind(this)}
        ref="aside"
      >
        <div className="img_list_flex" ref="asideContent">
          {this.colIndexArr.map(i => (
            <div key={i} className="img_list_l">
              <div ref={"col" + i}>
                {this.state["col" + i].map((pic, index) =>
                  React.cloneElement(this.props.children, {
                    pic,
                    index,
                    key: index
                  })
                )}
              </div>
            </div>
          ))}
        </div>
      </aside>
    );
  }
}

export default PicWaterFall;
