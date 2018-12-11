import React, { Component } from 'react';
import './App.css';

function B(props) {
    if (!props.a) {
      return null;
    }
    return (
      <div>
        Warning!
      </div>
    );
  }
  
  class App extends React.Component {
    constructor(...args) {
      super(...args);
      this.state = {flag: true}
    }
  
    fn() {
        // 这里是可以直接上函数作为参数的 并且该函数的第一个参数就是之前的状态
      this.setState(prevState=>({
        flag: !prevState.flag
      }));
    }
  
    render() {
      return <div>
        <button onClick={this.fn.bind(this)}>
        {this.state.flag ? 'Hide' : 'Show'}
      </button>
          <B a={this.state.flag} />
        </div>
    }
  }
export default App;
