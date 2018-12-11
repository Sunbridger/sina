import React, { Component } from 'react';
import './App.css';
class App extends Component{
    state={
        count:'60'
    };
    gotime(){
        console.log(22)
        if(this.state.count==0){
            this.setState({count:60});
            return;
        }
        setInterval(()=>{
            this.setState({count:--this.state.count});
        },1000);
    }
    render(){
        console.log('render函数调用')
        return <div>
        {/* 受控组件
            text为不受控组件
         */}
            <input type="button"
            value={this.state.count>=60?'发送':this.state.count} 
            onClick={(e)=>{
                this.gotime();
            }}/>
        </div>
    }
}
export default App;
