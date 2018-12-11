import React, { Component } from 'react';
import './App.css';
import { resolve } from 'upath'; 
import { userInfo } from 'os';
class App extends React.Component{
    constructor(...args){
        super(...args);
        this.state={
            users:[],
            currentUserId:null
        };
    }
    componentDidMount(){
        // 服务端获取数据
        let data=[{name:'乔',age:222,address:'北京1',phone:'133400021258'}
        ,{name:'乔2',age:223,address:'北京2',phone:'1330004qw21258'}
        ,{name:'乔3',age:224,address:'北京3',phone:'133000w21258'}];
        this.setState({
            users:data
        })
    }
    addInfo(user){
        this.setState({users:this.state.users.concat([user])});
    }
    currentuser(userId){
        this.setState({
            currentUserId:userId
        })
    }
    render(){
        const fill=this.state.users.filter(user=>{
            user.id===this.state.currentUserId
        })
        const currentUser=fill.length>0?fill[0]:null;
        return (
            <div>

            <List users={this.state.users}
                  currentUserId={this.state.currentUserId}
                  addInfo={this.addInfo.bind(this)}
                  onSetCurrentUser={this.currentuser.bind(this)}                  
            />
            <UserInfo currentUser={currentUser}/>
            </div>
        )
    }
}
class List extends React.Component{
    constructor(...args){
        super(...args);
        this.state={
            newuser:''
        };
    }
    changefn(e){
        this.setState({newuser:e.target.value});
    }
    // 父组件的方法 新增用户
    clickfn(){
        if(this.state.newuser&&this.state.newuser.length>1){
            this.props.addInfo(this.state.newuser);
        }
    }
    // 父组件的方法 设置当前的用户
    currentfn(e){
        this.props.currentuser(e)
    }
    render(){
        return (
            <div>
                {this.props.users.map(el=>{
                    return (
                        <li key={this.props.users.id} className={this.currentfn.bind(this)===this.props.users.id?'curr':''}>
                                <span>{this.props.users.name}</span>
                        </li>
                    )
                })}
                <input type="text" onChange={this.changefn.bind(this)}/>
                <input type="button" value='新增' onClick={this.clickfn.bind(this)}/>
            </div>
        )
    }
}
function UserInfo(props){
    return (
        <div>
            {
                props.curentuser?
                (<div>
                    <div>用户名{props.currentuser.name}</div>
                    <div>用户年龄{props.currentuser.age}</div>
                    <div>用户地址{props.currentuser.address}</div>
                    <div>用户电话{props.currentuser.phone}</div>
                </div>    
                ):''
            }
        </div>
    )
}
export default App;