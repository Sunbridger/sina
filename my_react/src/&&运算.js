import React, { Component } from 'react';
import './App.css';

class App extends Component{
    constructor(...args){
        super(...args)
        this.state={flag:0}
    }
    render(){
        return <div>
        <button onClick={()=>{this.setState({flag:+!this.state.flag})}}>{this.state.flag}</button>
            {this.state.flag>0&&
                <h2>你好 我是真时状态</h2>
            }{this.state.flag==0&&
                <h2>你好 我是假时状态</h2>
            }
        </div>
    }
}
export default App;
