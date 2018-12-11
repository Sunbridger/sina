import React, { Component } from 'react';
import './App.css';
import { resolve } from 'upath'; 
function Control(Com){
    return class extends React.Component{
        constructor(...args){
            super(...args);
            this.state={value:''};
        }
        changefn(e){
            this.setState({value:e.target.value})
        }
        render(){
          const  newProps={
                controlProps:{
                    value:this.state.value,
                    onChange:this.changefn
                }
            }
            return <Com {...this.props} {...newProps}/>
       }
       
    }
}
class App extends React.Component{
    render(){
        return  <input type="text" {...this.props.controlProps}/>
    }
}
let a=class App extends React.Component{
    render(){
        return  <input type="text" {...this.props.controlProps}/>
    }
}
Control(App);
export default App;