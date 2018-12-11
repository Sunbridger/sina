import React, { Component } from 'react';
import './App.css';
class App extends Component{
    render(){
        return <div>
            <P aa='1' bb='2'/>
        </div>
    }
}
class P extends App{

    static defaultProps={
        name:'',
        age:''
    }
    static a=22;
    
    render(){
        console.log(this.props)
        return <div>
            {P.a}
            {this.props.name}
        </div>
    }
}
export default App;