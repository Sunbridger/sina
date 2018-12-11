import React, { Component } from 'react';
import './App.css';
import { resolve } from 'upath';
class App extends React.Component{
    componentDidMount(){
        console.log(this.aaaa)//后
    }
 render(){
    console.log(this.aaaa)//先
     return <div>
         <input type="text" ref={(sun)=>this.aaaa=sun}/>
        <button onClick={()=>{
        console.log(this.aaaa)
        }}>提交</button>
     </div>
 }
}
export default App;