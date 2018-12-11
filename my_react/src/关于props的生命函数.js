import React, { Component } from 'react';
import './App.css';
import { resolve } from 'upath';
class Son extends React.Component{
    componentWillReceiveProps(newProps){
        if(this.props.a!=newProps.a){
            console.log('ssssss')
        }
    }
    render(){
        return <div>
            {this.props.a}
        </div>
    }
}
class App extends React.Component{
    constructor(...args){
        super(...args);
        this.state={
            a:0
        }
        setInterval(()=>{
            this.setState({
                a:this.state.a+1
            })
        },1000)
    }
    render(){
        return <div>
            <Son a={this.state.a}/>
        </div>
    }
}
export default App;