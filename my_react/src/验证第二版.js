import React, { Component } from 'react';
import './App.css';
class B extends React.Component{
    constructor(...args){
        super(...args);
        this.state={
            count:60,
            isSend:false,
            isOnclick:false,
            timer:null,
            maskShow:true
        };
    }
    handle(){
        this.setState({
            isOnclick:true,
            isSend:true,
            timer:setInterval(()=>{
                this.setState({
                    count:(this.state.count-1)
                },()=>{
                    if(this.state.count==55){
                        clearInterval(this.state.timer);
                        this.setState({
                            count:60,
                            isOnclick:false,
                            isSend:false
                        })
                    }
                })
            },1000)
        })
    }
render(){
    return <div>
    <form>
        <input type="text" placeholder='手机验证码' maxLength='6' 
        onChange={(e) => {
                    if (isNaN(+ e.target.value)) {
                            console.log('请输入数字');
                    }
                    if (e.target.value == '123456') {
                        clearInterval(this.state.timer);
                        this.setState({
                            isOnclick:true,
                            isSend:false,
                            maskShow:false
                        },()=>{
                            this.props.a(this.state.maskShow);
                        })
                    }
                }}/> 
        <input  type="button"  
        defaultValue={this.state.isSend
            ? this.state.count + 'S  后重发'
            : '发送验证码'} 
        disabled={this.state.isOnclick} 
        onClick={this.handle.bind(this)}/>
    </form>
        <div style={{display:this.state.maskShow?'block':'none'}}>
        我是遮罩层
        </div>
    </div>
    }
}

class App extends Component{
    constructor(...args){
        super(...args)
        this.state={
            parenta:''
        }
    }
    fn(e){
        this.setState({
            parenta:e
        })
    }
    render(){
        return <div>
            <B a={this.fn.bind(this)}/>
            <span style={{display:this.state.parenta?'none':'block'}}>我是span</span>
        </div>
    }
}
export default App;
