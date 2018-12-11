import React, { Component } from 'react';
import './App.css';
class App extends Component{
     render(){
         setTimeout(()=>{
            console.log(this.sonxia);
         },111)
         return (
            <div>
             <Children china={sonxia=>{this.sonxia=sonxia}}/>
         </div>
         )
         
     }
}
function Children(props){
    return <div>
        <input className='ss' ref={props.china}/>
    </div>
}
export default App;