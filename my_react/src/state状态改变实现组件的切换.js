import React, { Component } from 'react';
import './App.css';

class Com2 extends Component{
    render(){
        return <div>
            我是第二个组件 
            看看定时器还在打印么
            他应该不会销毁的
            如果我不设置的话
            只是组件的跳转它是不会销毁的
        </div>
    }
}



class Com1 extends Component {   
    constructor(...args){
        super(...args);
        this.state={
            opacity:1
        }
    }
 render(){
    return <div style={{
        opacity:this.state.opacity,
        width:"100px",
        height:"100px",
        background:"pink"
    }}>
    </div>
 }

 componentWillUnmount(){
     clearInterval(this.timer)
     console.log('我要走啦');
 }
 componentDidMount(){
     console.time('as')
    this.timer=setInterval(()=>{
        let opa=this.state.opacity;
        opa-=.05;
        if(opa<0.1){
            opa=1
        }
        this.setState({
            opacity:opa
        })
        // console.log(this)这个this就是App这个组件的
        console.log(opa)
    },100)
     console.timeEnd('as')
 }
}

class App extends Component{
    constructor(...args){
        super(...args);
        this.state={flag:0}
    }
    render(){
        if(!!(this.state.flag)){
           return <div>
           <button onClick={()=>{
                this.setState({flag:!this.state.flag})
            }}>切换组件</button>
            <Com1/>
            </div>
        }
            return <div>
           <button onClick={()=>{
                this.setState({flag:!this.state.flag})
            }}>切换组件</button>
                <Com2/>
            </div>
        }
    }


export default App;
