import React, { Component } from 'react';
import './App.css';
class App extends Component{
     state={
        a:0
    }
    changeA(){
        this.setState({a:this.state.a+1});
    }
    render(){
        return <div>
        {this.state.a}
        <button onClick={this.changeA.bind(this)}>加</button>
        </div>
    }
}
export default App;