import React, { Component } from 'react';
import './App.css';

function heightCom=(key)=>(WrapCom)=>{
    return class extends Component{
        componentWillMount(){
            this.setState({data:'假装这是ajax拿到的数据'});
        }
        render(){
            console.log('hightOrder');
            return (
                <div>
                <WrapCom data={this.state.data} {...this.props}/>
                </div>
                
            )
        }
    }
}

class Appw extends Component{
    componentWillMount(){
        this.setState({self:'我自己的一个属性'});
    }
    render(){
        setTimeout(()=>{console.log(this.state,this.props)},111);
        return <div>
            ssssss
            {this.props.data}
        </div>
    }
}
console.log(3)
const App=heightCom(Appw);
export default App;