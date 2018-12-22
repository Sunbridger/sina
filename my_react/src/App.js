import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      divider:''
    }
    this.pageSize = 10;
  }
  createDivider(n) {
    // let currentPage = this.state.currentPage
    // let totalCount = this.state.totalCount
    let currentPage = 1;
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
  componentDidMount(){
    this.createDivider()
  }
  render(){
    console.log(this.state.divider,'divider....')
    return (
      <div>
        .....
      </div>
    )
  }
}

export default App;
