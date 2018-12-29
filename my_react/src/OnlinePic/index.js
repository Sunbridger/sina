import React, { Component } from "react";
import PicWaterFall from "../PicWaterFall";
import { getApp } from "../api/pic";

class OnlinePic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      publicPics: [], // 最后所有加载出来的图片都是保存在这里的
    };
    this.publicPicPageIndex = 0;
  }



  async getPublicPic(q) {
    if (q != this.q) {
      this.q = q;
      this.setState(
        {
          publicPics: []
        },
        async () => {
          this.publicPicPageIndex = 1;
          let res = await getApp({
            tags:q,
            page:this.publicPicPageIndex
          });
          let tempPics = [];
          res.data.volist.length &&
            res.data.volist.forEach(item => {
              tempPics.push({
                id: item.materialid,
                src: item.thumbnailurl || item.originurl
              });
            });
          this.setState(
            {
              publicPics: [...this.state.publicPics, ...tempPics]
            });
        }
      );
    } else {
      ++this.publicPicPageIndex;
      let res = await getApp({
        tags:q,
        page:this.publicPicPageIndex
      });
      let tempPics = [];
      res.data.volist.length &&
            res.data.volist.forEach(item => {
              tempPics.push({
                id: item.materialid,
                src: item.thumbnailurl || item.originurl
              });
            });
      this.setState(
        {
          publicPics: [...this.state.publicPics, ...tempPics]
        });
    }
  }

  // 节流用 保留
  inputThrottle(e) {  
    let value = e.target.value;
    this.getPublicPicTimeout && clearTimeout(this.getPublicPicTimeout);
    this.getPublicPicTimeout = setTimeout(() => {
      this.getPublicPic(value);
    }, 500);
  }

  render() {
    const PicItem = ({ pic, index }) =>{
      return (
        <figure key={index}  className={"img_box i_bg "}>
          <img className="img_width" src={pic.src} />
        </figure>
      )
    }
    return (
      <div className="c_r_box_tab">
        <div className="c_r_box_tab_flex">
          <div className="tab_box_search">
              <input
                className="tab_box_search_txt"
                type="text"
                ref="input"
                onChange={this.inputThrottle.bind(this)}
              />
              <a href="" className="tab_box_search_btn" />
          </div>
            <PicWaterFall
                  pics={this.state.publicPics}
                  ref="picWaterFall"
                  height={380}
                  onScrollBottom={() => {
                    this.getPublicPic(this.q);
                  }} >
                <PicItem />
            </PicWaterFall>
        </div>
      </div>
    );
  }
}

export default OnlinePic;
