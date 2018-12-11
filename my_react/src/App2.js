import React, { Component } from 'react';
import './App.css';
import {filterInfo} from './filterInfo';
import {SonFn} from './SonFn';
import changeInfo from './changeInfo';
class App extends Component{
    //    利用Prosmise解决Ajax同步拿值的问题
       state={
        movies:''
       } 
        async pullOrigin(){
          let res=await SonFn();
          console.log(res,'res')
          let data=filterInfo(res);
          this.setState({
            movies:data
          })
      }
        componentDidMount(){
        this.pullOrigin()
        }
      render(){
          console.log(this.state.movies,'this.state.movies')
          return <div>
          
          </div>
      }
}
export default App;
