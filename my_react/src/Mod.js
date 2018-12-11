import React, { Component } from 'react';

class Mod extends Component{
  constructor(props){
    super(props);
    this.state={
      currentIndex:props.currentIndex,
      index:props.index,
      list:props.list
    }
    console.log(this.state.list,'ist')
  }
  clickMe(){
    this.props.changeCurrentIndex();
  }

  render(){
    console.log(this.state.list)
    let { currentIndex,index,list } = this.state;
    return <div className={`mod ${currentIndex==index?'active':''}`} onClick={this.clickMe.bind(this)}>
    <span className='delMod' onClick={()=>this.props.delMod(index)}>删除模块</span>
    {list.map(el=>{
      return <div key={el.id} id={el.id} >
      <span>{el.title}</span>
      <span className='redChoose' onClick={()=>this.props.delchose(el.id,index)}>x</span>
      </div>    
    })}
    </div>
  }
}
export default Mod;