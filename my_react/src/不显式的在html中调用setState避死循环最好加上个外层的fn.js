import React, { Component } from 'react';
import './App.css';
class App extends Component{
    state={
        ok:false
    }    
    ffn(e){
        this.setState({
            ok:e
        })
    }
    showDiv(){
        this.setState({
            ok:false
        })
        return <div>
            ssssssslinn
        </div>
    }   
    render(){
            return <div>
                <Son callback={this.ffn.bind(this)}/>
                {
                    this.state.ok&&
                    this.showDiv()
                }
            </div>
       } 
}
class Son extends App{
    fn(){
        this.props.callback(true);
    }
    render(){
        return <div>
        <button onClick={this.fn.bind(this)}>按钮</button>
        </div>
    }
}
export default App;
