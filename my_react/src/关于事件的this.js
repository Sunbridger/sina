import React, { Component } from 'react';
import './App.css';
import { resolve } from 'upath';
class App extends React.Component{
    fn=(e)=>{
        console.log(this)
    }
    render(){
      return <button onClick={(e)=>{
          this.fn()
          console.log(e);
          console.log(e.nativeEvent);
      }}>按下</button>
  }
}
export default App;
