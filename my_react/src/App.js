import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      divider:[],
      currentPage:1
    }
    this.pageSize = 10;
  }
  createDivider(n) {
    // let currentPage = this.state.currentPage
    // let totalCount = this.state.totalCount
    let currentPage = this.state.currentPage;
    let totalCount = 24;
    if (!currentPage || !totalCount) {
      this.setState({
        divider: []
      })
      return
    }
    // debugger;
    let totalPageNum = totalCount / this.pageSize + 1
    if (totalPageNum % 1 == 0) { //刚好除完
      totalPageNum--
    }
    totalPageNum = parseInt(totalPageNum)
    console.log(totalPageNum,'totalPageNum')
    let divider = []
    for (let i = 1; i <= totalPageNum; ++i) {
      divider[i] = {
        num: i,
        dots: false,
        active: false
      }
    }
    if(totalPageNum && (divider[currentPage].active = true)){  
      if(totalPageNum>10){
        console.log(currentPage,'这页是当前的','===因为大10 所以得打点考虑。。。')
      }
    }
    this.setState({
      divider
    })
  }
  setPage(currentPage){
    this.setState({
      currentPage
    })
  }
  componentDidMount(){
    this.createDivider()
  }
  render(){
    let me = this;
    return (
      <div className="page_num">
        {me.state.divider.map((item, index) => {
          if (item.dots) {
            return <span key={index}>......</span>
          } else {
            return (
              <a
                key={index}
                className={item.active ? 'page_num_a active' : 'page_num_a'}
                href="javascript:void(0)"
                onClick={me.setPage.bind(me, item.num)}
              >
                {item.num}
              </a>
            )
          }
        })}
      </div>
    )
  }
}

export default App;
