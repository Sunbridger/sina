import React, { Component } from 'react';
import './App.css';
import { resolve } from 'upath'; 
function Son(props){
    return <div>
        <input type="text" ref={props.son}/>
    </div>
}
// props.son 就是 ss  所以这个son就是子组件的input元素
class App extends React.Component {
    constructor(...args){
        super(...args);
    }
    componentDidMount(){
        console.log(this.son)
    }
    render(){
        return <div>
            <Son son={(e)=>this.son=e}/>
        </div>
    }
      // componentDidMount(){
    //     console.log(222)
    //     console.log(this.p.innerHTML)
    // }
    // render(){
    //     console.log(111)
    //     return <div>
    //         <p ref={(a)=>this.p=a}>kjsajdkajd</p>
    //     </div>
    // }
};
 
export default App;