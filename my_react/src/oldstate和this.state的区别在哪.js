import React, { Component } from 'react';
import './App.css';
import { resolve } from 'upath'; 
class App extends React.Component{
 constructor(...args){
     super(...args);
     this.state={
         arr:[1,2,3],
         owner:{
             name:'sunbridger'
         },
         value:''
     }
 }
 fn(){
     this.setState(oldstate=>({
         owner:Object.assign({},oldstate.owner,{age:this.state.value})
        //  owner:Object.assign({},oldstate.owner,{age:oldstate.value})
     }),()=>{
         console.log(this.state.owner)
     })
    //  this.setState({
    //      arr:[...this.state.arr,Math.random()]
    //  })
    // this.setState(prevState=>({
    //     arr:prevState.arr.concat([22])
    // }))
 }
    render(){
        return <div>
            {this.state.arr.map((ele,index)=>{
                return <p key={index}>{ele}</p>
            })}
            <input type="text" onChange={(e)=>{this.setState({value:e.target.value})}}/>
            <button onClick={this.fn.bind(this)}>增加</button>
        </div>
    }
}
export default App;