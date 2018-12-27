import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      divider:[],
      currentPage:1,
      totalCount:(Math.random()*150+80)
    }
    this.pageSize = 10;
  }
  createDivider(n) {
    // let currentPage = this.state.currentPage
    // let totalCount = this.state.totalCount
    let currentPage = this.state.currentPage;
    let totalCount = this.state.totalCount;
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
      if (totalPageNum > 10) {
        if (currentPage < 6) {
          divider.splice(7, totalPageNum - currentPage - 6, {
            dots: true
          })
        } else if (currentPage > totalPageNum - 7) {
          divider.splice(3, currentPage - 6, {
            dots: true
          })
        } else {
          divider.splice(3, currentPage - 4, {
            dots: true
          })
          divider.splice(8, totalPageNum - currentPage - 5, {
            dots: true
          })
        }
      }
    }
    this.setState({
      divider
    })
  }
  setPage(currentPage){
    this.setState({
      currentPage
    },this.createDivider)
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
