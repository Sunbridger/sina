import React, { Component } from 'react';
import './App.css';
import { resolve } from 'upath';
class App extends React.Component{
    constructor(...args){
        super(...args);
        this.state={
            a:0
        };
    }
    fn(){
        if(this.state.a==0){
            this.setState({a:1})
        }
        if(this.state.a==1){
            this.setState({a:2})
        }
        if(this.state.a==2){
            this.setState({a:3})
        }
        else{
            this.setState({a:1})
        }
    }
    // handle(){
    //    return new Promise((resolve,reject)=>{
    //         if(this.state.a==0){
    //             resolve('1')
    //         }else if(this.state.a==1){
    //             resolve('2')
    //         }else if(this.state.a==2){
    //             resolve('3')
    //         }else{
    //             resolve('1')
    //         }
    //     })
    // }
    // fn(){
    //     this.handle().then(sun=>{
    //         this.setState({a:sun})
    //     }).then(()=>{
    //         console.log(this.state.a)//1
    //     })
    //     // console.log(this.state.a)//0 这里获取到的可能不是最新的数据
    // }
    render(){
        return <div>
            <button onClick={this.fn.bind(this)}>点吧</button>
        </div>
    }
}
export default App;
