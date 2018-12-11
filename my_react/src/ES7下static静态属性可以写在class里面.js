import React, { Component } from 'react';
import './App.css';
class App extends Component{
    constructor(...args){
        super(...args);
        this.b=2;
    }
    static a=3; //报错
    render(){
        const c=1;
        return <div>
            {this.b}
            <br/>
            {c}
            <br/>
            {App.a}
            <P/>
        </div>
    }
}
class P extends App{
    constructor(...args){
        super(...args);
    }
    render(){
        return <div>
            {this.b}
            <br/>
            {P.a}
        </div>
    }
}
export default App;