import React, { Component } from 'react';
import './App.css';
import { resolve } from 'upath';
class App extends React.Component{
    constructor(...args){
        super(...args);
        this.state={
            value:'two'
        }
    }
    fn(e){
        console.log(e.target);
        this.setState({
            value:e.target.value
        })
    }
    render(){
        return <div>
            <select name="" id="" defaultValue={this.state.value} onChange={this.fn.bind(this)}>
                <option value="one">1</option>
                <option value="two" >2</option>
                <option value="three">3</option>
            </select>
        </div>
    }
}
export default App;
{/*Use the `defaultdefaultValue` or `defaultValue` props on <select> 
instead of setting `selected` on <option>. */}