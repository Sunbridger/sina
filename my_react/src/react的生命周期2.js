import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
class App extends Component{
    state={
        on:'ture'
    };
    render(){
        return <div>
        {
            this.state.on&&
            <HowTime name='sssun' age='222' />
        }
            <button onClick={()=>{
                this.setState({
                    on:!this.state.on
                })
            }}>死或生</button>
        </div>
    }
}
class HowTime extends Component{
    /* 组件的生命周期 
    1.先是初始化props 无则默认传则替换
    2.再是执行this.state也就是constructor的函数执行
    3.接着就是按顺序的往下走
    4.其中componentWillMount componentDidMount只会执行一次 即使状态改变也是
    5.render componentWillUpdatecomponentWillReceivewProps...都是会执行多次的

    */
   static defaultProps={
        name:'sun'    
    }
    constructor(props){
        super(props)
        console.log(this.props.name)
        this.state={
            count:0
        }
    }
    componentWillMount(){
        console.log(this.props.name)
        console.log('HowTime即将挂载')
        this.setState({
            count:++this.state.count
        })
    }
    componentWillUpdate(){
        console.log('组件即将更新')
    }
    render(){
        console.log('HowTime开始渲染了')
        return <div>
            我是组件HowTime
            我渲染了{this.state.count}次
            <button onClick={()=>{
                this.setState({
                    count:++this.state.count
                })    
            }}>HowTime组件的状态改变</button>
            <br/>
            {this.props.name}
        </div>
    }
    componentDidMount(){
        console.log('HowTime挂载完毕')
    }
}
export default App;
