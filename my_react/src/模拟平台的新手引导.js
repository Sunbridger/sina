import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var localStorage = window.localStorage;
class App extends Component {
  state = {
    tipForNewBox:localStorage.tipForNewBox
  }
  iknow(){
    localStorage.setItem('tipForNewBox',true)
    this.setState({tipForNewBox:localStorage.tipForNewBox})
  }
  render(){
    return (
      <div>
        <div className='pub' onClick={this.iknow.bind(this)}>发布圈子</div>
      {
        !this.state.tipForNewBox&&(
          <div className='div_box '>
            <span className='iconsquare'></span>
            <p>新的功能已经上线了</p>
            <button onClick={this.iknow.bind(this)}>知道了</button>
          </div>  
        )
      }
      </div>
    )
  }
}

export default App;
