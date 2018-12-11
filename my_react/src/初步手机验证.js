import React, { Component } from 'react';
import './App.css';
class App extends React.Component{
    constructor(...args){
        super(...args);
        this.state={
            count:60,
            flag:false,
            timer:null,
            abled:false
        }
    }
    handle(){
        this.setState({
            flag:!this.state.flag,
            abled:true
        })
        this.setState({
            timer:setInterval(()=>{

                if(this.refs['inp'].value=='123456'){
                    console.log('验证正确');
                    this.setState({
                        abled:false,
                        count:60,
                        flag:!this.state.flag
                    })
                    clearInterval(this.state.timer);
                } 
                console.log(111)
                this.setState({
                    count:this.state.count-1
                },()=>{
                    if(this.state.count==50){
                        this.setState({
                            flag:!this.state.flag,
                            count:60,
                            abled:false
                        })
                        clearInterval(this.state.timer);
                    }
                })
            },1000)
        })
       


    }


    render(){
        return <div>
            <input ref={'inp'} maxLength='6' type="text"/>
            <button disabled={this.state.abled} onClick={this.handle.bind(this)}>{this.state.flag?'还剩'+this.state.count+'s':'发送验证码'}</button>
        </div>
    }
}


export default App;
