import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Mod from './Mod';
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      arrRight:[],
      modArr:[]
    };
  }
  fn(){
     return new Promise(resolve=>{
      $.ajax({
        url:'https://api.douban.com/v2/movie/in_theaters?city=广州&start=0&count=10',
        method:'GET',
        dataType:'jsonp',
        success:res=>{
          if(typeof res=='string'){
            res=JSON.parse(res);
          }
          resolve(res);
        }
      })
    })
  }
  async getData(){
    let data = await this.fn();
    console.log(data)
    this.setState({arrRight:data.subjects});
  }
  componentDidMount(){
    this.getData()
  }
  addMod(){
    let newarr = this.state.modArr;
    newarr.push({Mod,list:[]});
    this.setState({
      modArr:newarr
    },()=>{
    this.setState({
      currentIndex:this.state.modArr.length-1
    })
    })
  }
  changeCurrentIndex(currentIndex){
    this.setState({currentIndex});
  }
  delMod(index){
    console.log(index,'index')
    let newarr = this.state.modArr;
    newarr.splice(index,1);
    this.setState({
      modArr:newarr
    },()=>{
      this.setState({
        currentIndex:this.state.modArr.length-1
      }) 
    })
  }
  dataToprop(data){
    let { modArr,currentIndex } = this.state;
    if(modArr[currentIndex].list.indexOf(data)!=-1)return
    modArr[currentIndex].list.push(data)
    this.setState({modArr});
  }
  delchose(id,index){
    let { modArr,currentIndex } = this.state;
    if(currentIndex!==index)return;
    modArr[currentIndex].list=modArr[currentIndex].list.filter(el=>el.id!=id);
  }
  render(){
    let { arrRight,modArr,currentIndex,obj } = this.state;
      return (
        <div>
          <section className='modArr'>
          { modArr.map((ele,index)=>{
              let Mod = ele.Mod;
              let list = ele.list;
              return <Mod key={Math.random()} list={list} delchose={this.delchose.bind(this)} currentIndex={currentIndex} index={index} changeCurrentIndex={()=>this.changeCurrentIndex(index)} delMod={this.delMod.bind(this)}/>
            }) }
            <center onClick={this.addMod.bind(this)}>添加模块</center>
          </section>
          <div className='arrRightBox'>
            { arrRight.map(ele=>{
              return (
                <div key={ele.id} className='flexSon'>
                  <span>{ele.title}</span>
                  <span className='redChoose' onClick={()=>this.dataToprop(ele)}>+</span>
                </div>
              )
            }) }
          </div>
        </div>
      )
    }
}
export default App;
