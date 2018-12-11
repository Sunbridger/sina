import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
// import {SonFn} from './Son';
class App extends Component{
    componentDidMount(){
        $.ajax({
            type: "POST",
            url:" http://api.avatardata.cn/ActNews/Query?key=064b169f53424be296618ec5ae9dfd24&keyword=奥巴马&format=true",
            dataType:'jsonp',
            jsonp:"callback",
            timeout:3000,
            success:(res)=>{
                res=JSON.parse(res);
                console.log(res)
            }
          });  
    }
    render(){
        // SonFn().then(data=>{
        //     console.log(data);
            // then里面的函数就是resolve 其实就是success success里面有啥它就有
            // 与异步相关的附加数据都会传递给这个resolve函数
        return <div>
            是是
        </div>
    }
}
export default App;
