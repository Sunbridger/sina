import React, { Component } from 'react';
import './App.css';
import { resolve } from 'upath';
class App extends React.Component{
    constructor(...args){
        super(...args);
        this.state={
            name:'',
            password:''
        };
    }
    fn(e){
        this.setState({
            [e.target.name]:e.target.value,
        })
    }
    get(){
        let data={
            name:this.state.name,
            password:this.state.password
        }
        console.log(data);
    }
    render(){
        return <div>
            <input type="text" name='name' onChange={this.fn.bind(this)}  defaultValue={this.state.name}/>
            <input type="password" name='password' onChange={this.fn.bind(this)}  defaultValue={this.state.password}/>
            <button onClick={this.get.bind(this)}>获取</button>
        </div>
    }
}
export default App;
