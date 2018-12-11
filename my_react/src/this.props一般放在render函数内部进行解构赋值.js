import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
class App extends Component{
       render(){
           return <div>
               <Son age='2222'/>
           </div>
       } 
}
class Son extends Component{
    static defaultProps={
        name:'sunbridger'
    }
    render(){
        let {name,age}=this.props;
        return <div>
            {name}
            <br/>
            {age}
        </div>
    }
}
export default App;
