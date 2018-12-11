import React, { Component } from 'react';
class InputBox extends Component{
  state={
    title:''
  }
  change(e){
    this.props.save(e.target.value,this.props.id)
  }
  
  render(){
    return <div>
      <textarea  onChange={e=>{this.change(e)}} ></textarea>
      <button onClick={this.props.del}>删除模块</button>
    </div>
  }
}

export default InputBox;