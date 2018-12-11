import React, { Component } from 'react';
import './App.css';
import { resolve } from 'upath';
class Son extends React.Component{

    componentDidMount(){
        // 哪里想使用这个东西的话 那里就要使用这个定义
        // es6的语法 函数作用域啊
        const {name,address,age}=this.props;
        console.log(this.props);
        console.log(name)
        // Objectaddress: "beijnng"age: "22"name: "sunbridger"__proto__: Object
    }
    render(){
        const {name,address,age}=this.props;
       return <div>
            姓名{name}
            年龄{age}
            地址{address}
        </div>
    }
}
class App extends React.Component{
    render(){
        return <div>
        <Son  name='sunbridger' age='22' address='beijnng'/>
        </div>
    }
}
export default App;
