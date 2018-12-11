import React, { Component } from 'react';
import './App.css';
import { resolve } from 'upath'; 
class App extends React.Component {
  constructor(...args){
    super(...args);
    this.state={
        users:[]
    };
  }
  componentDidMount(){
    //   向服务器拿数据
    let data=[1,2,3,45];
    this.setState({users:data});
  }
    //增加数据
    addInfo(e){
        this.setState(oldstate=>({users:oldstate.users.concat([e])}));
    }
    render(){
        return (
            <Son users={this.state.users} addInfo={this.addInfo.bind(this)}/>
        )
    }   
};
 class Son extends React.Component{
     constructor(...args){
         super(...args);
         this.state={
             newuser:''
         };
     }
     changefn(e){
        //  每一次的onchange都会执行render方法
         this.setState({newuser:e.target.value});
     }
    //  通过props调用父组件的方法来新增用户
     clickfn(){
         if(this.state.newuser&&this.state.newuser.length>1){
             this.props.addInfo(this.state.newuser);
         }
     }
     render(){
         return (
             <div>
                 {this.props.users.map(el=><p key={el}>{el}</p>)}
                 <input type="text" onChange={this.changefn.bind(this)}/>
                 <input type="button" onClick={this.clickfn.bind(this)} value='提交'/>
             </div>
         )
     }
 }   
export default App;