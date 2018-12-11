import React, { Component } from 'react';
import './App.css';
class App extends Component{
    state={
        ok:false,
        count:60
    };
    static defaultProps={
        timer:'w'
    }
    componentWillMount(){
        // this.props.timer=222
        // props下的东西一般就是不可修改的 read only property 
    }
    render(){
        return <div>
            {this.props.timer}
        </div>
    }
}
export default App;
