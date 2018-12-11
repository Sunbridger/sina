import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {   
  render() {
      if(!(this.props.flag)){
        return <div>11111</div>
      }
        return <div>222222</div>
    }
}
export default App;
