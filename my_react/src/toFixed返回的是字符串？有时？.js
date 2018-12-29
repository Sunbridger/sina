import React, { Component } from 'react';
import './App.css';
class App extends Component{

    render(){
      var num = 0.02;
      var a = Number((Number(num)*100).toFixed());
      console.log(num,a,'num')
      return (
        <div>
        generator用哪个
        </div>
      )
    }
}
export default App;
