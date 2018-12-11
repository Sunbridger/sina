import React, { Component } from 'react';
import './App.css';
import { resolve } from 'upath'; 
class Son extends React.Component{
    constructor(...args){
        super(...args);
        this.state={
            value:''
        }
        console.log('constructor触发');
    }
    componentWillUpdate(){
        console.log('更新l')
    }
    render(){
        console.log('render触发')
        return <div>
        <input type="text" onChange={(e)=>{
            this.setState({
                value:e.target.value
            },()=>{this.props.fn(this.state.value)})
        }}/>
        </div>
    }
}
class App extends React.Component{
    constructor(...args){
        super(...args);
        this.state={
            arr:[1,2,3]
        }
    }
    fn(e){
        this.setState(old=>({
            arr:old.arr.concat([e])
        }))    
    }
    render(){
        return <div>
            <Son fn={this.fn.bind(this)}/>
            {this.state.arr.map((ele,index)=>{
                return <p key={index}>{ele}</p>
            })}
        </div>
    }
}
export default App;