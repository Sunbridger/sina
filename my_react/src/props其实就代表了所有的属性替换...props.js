import React, { Component } from 'react';
import './App.css';
class App extends Component{
    constructor(...props){
        super(...props);
        this.state={
            name:'父'
        };
    }
    state2='父2';
    render(){
        return (
            <Son pps={this.state.name} pr={this.state2} />
        )
    }
}
class Son extends App{
    constructor(props){
        console.log(props);
        // {pps: "父", pr: "父2", nn: "sss", age: 22, prr: "ssssssss"}
        super(props);
    }
    static defaultProps={
        nn:'sss',
        age:22,
        pr:'ssssssss'
        // 默认的属性总是很容易就被替代了 立马被父传来的props更新掉
    }
    render(){
        return (
            <div>
            {this.props.pr}
            <br/>
            {this.props.nn}
            <br/>
            {this.props.pps}
            </div>
        )
    }
}
export default App;
