import React, { Component } from 'react';
import './App.css';
class App extends Component{
    state={
        ok:false,
        count:60
    };
    static defaultProps={
        timer:''
    }
    fn(){
        setInterval(()=>{
            this.setState({
                count:--this.state.count
            })
        },500);
        return <div>
            <p>
                我是被函数执行出来的出来{this.state.count}
            </p>
        </div>
    }
    changeState(){
        this.setState({
            ok:true
        })
    }
    render(){
        return (
            <div>
                <input type="button" value='出现' onClick={this.changeState.bind(this)}/>
                    {this.state.ok&&
                        this.fn()
                    }                   
            </div>
        )
    }
}
export default App;
