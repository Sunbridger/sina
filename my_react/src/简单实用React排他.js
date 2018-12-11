import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Mod from './Mod';


class App extends Component{
  state ={
    key:'',
    data:[1,2,3]
  }
  fn(key){
    this.setState({
      key
    })
  }
  render(){
    let {data,key}  = this.state;
    return <div>
    {
      data.map((el,index)=>{
        return <div key={index} className={key==el?'active':''} onClick={()=>{
          this.fn(el);
          }}>
          {el}
        </div>
      })
    }
    </div>
  }
}
export default App;
