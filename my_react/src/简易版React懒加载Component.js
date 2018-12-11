import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
const Hello = (props)=>{
  return (
    <div>
      你好
    </div>
  )
}
class App extends Component{
    constructor(props){
      super(props);
      this.state = {
        moduleLodaed:false,
        a:0
      }
      this._module = null;
    }
    componentDidMount(){
      console.log(121)
      if(!this.state.moduleLodaed){
        setTimeout(() => {
          this._module = Hello;
          this.setState({moduleLodaed:true})
        },1000)
      }
    }
    render(){
      let M = this._module;
      return (
        <div>
          {!this.state.moduleLodaed?<div>'Loading'</div>:<M />}
          <button onClick={()=>{
            this.setState({
              a:++this.state.a
            })
          }}>{this.state.a}</button>
        </div>
      )
    }
}
export default App;
