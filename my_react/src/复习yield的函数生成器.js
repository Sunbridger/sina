import React, { Component } from 'react';
import './App.css';
class App extends Component{
    *fn(){
      yield 2;
      (function(){
        console.log('自执行')
      }())
    }
    render(){
      let iterator = this.fn();
      console.log(iterator.next().value)
      console.log(iterator.next().value)
      return (
        <div>
        generator用哪个
        </div>
      )
    }
}
export default App;
