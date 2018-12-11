import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import InputBox from './InputBox';
class App extends Component{
    state={
      arrBox:[],
      title:{}
    }
    add(){
      let oldarrBox = this.state.arrBox;
      oldarrBox.push({
        selfId:Math.random(),
        InputBox 
      });
      this.setState({
        arrBox:oldarrBox
      })
    }
    del(id){
      let oldarrBox = this.state.arrBox;
      oldarrBox=oldarrBox.filter((el,index)=>{
        let selfId = el.selfId;
        return selfId!==id
      })
      let oldtitle = this.state.title;
      delete oldtitle[id]
      this.setState({
        arrBox:oldarrBox,
        title:oldtitle
      }) 
    }
    save(value,selfId){
      let newtitle =this.state.title;
      newtitle[selfId] = value;
      this.setState({
        title:newtitle
      })
    }
    render(){
      let arrBox = this.state.arrBox;
      console.log(this.state.title,this.state.arrBox)
        return <div>
        {
          arrBox.map((item,index)=>{
            let InputBox = item.InputBox;
            let selfId = item.selfId;
            return  <InputBox key={selfId} save={this.save.bind(this)} id={selfId}  del={()=>this.del(selfId)}/>
          })
        }
        <button onClick={this.add.bind(this)}>添加模块</button>
        </div>
    }
}
export default App;
