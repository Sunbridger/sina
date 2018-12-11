import React, { Component } from 'react';
import './App.css';

class Clock extends React.Component{

    constructor(...args){
        super(...args)
        this.state={
            count:60,
            isF:0
        };
    }
    isSend(){
        this.setState({
            isF:!this.state.isF,
            count:60
        })
    }

    handle(){
        this.isSend();
       let timer=setInterval(()=>{
            this.setState({
                count:(this.state.count-1)
            },()=>{
                if(this.state.count==55){
                    this.isSend();
                    clearInterval(timer)
                }
            })
        },1000)
    } 


    //     this.setState({
    //         count:60,
    //         isF:!this.state.isF
    //     })

    //    setInterval(()=>{
    //         this.setState(old=>{
    //             if(this.state.count==55){
    //                this.handle()
    //             }
    //             return {
    //               count:old.count-1
    //             } 
    //           })
    //     },1000) 
    //     if(!this.state.linked)return
    //     let count=this.state.count;
    //    setInterval(()=>{
    //     this.setState({
    //         count:(count--)
    //     })
    //    },1000)

    render(){
        return <div style={{margin:'200px'}}>
        <button 
           style={{background:'#1890FF',color:'#000',border:'none'}} 
        disabled={this.state.isF} onClick={this.handle.bind(this)}> 
        {this.state.isF?this.state.count+'秒后重发':'发送验证码'}
        </button>
        </div>
    }
    
}

class App extends React.Component{
    render(){
        return  <div>
            <Clock/>
            <input type="text"/>
        </div>
    }
    
    
}


export default App;
