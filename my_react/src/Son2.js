import React, { Component } from 'react';
import App from './App';
class Son2 extends App{
    constructor(props){
        super(props)
    }
    render(){
        return <div>
        <input type="text" onChange={(e)=>{
            this.props.changeName(e.target.value);
        }}/>
        <button onClick={this.props.pullOriData}>重置</button>
            <button onClick={()=>{this.props.callback(this.props.funame)}}>按钮</button>
        </div>
    }
}
export default Son2;