import React, {
    Component
} from 'react';
import './App.css';
class App extends React.Component{
    constructor(...args){
        super(...args)
        this.state={count:1}
    }
    fn() {
        this.setState(prevState=>{
            // count:prevState.count+1
            // console.log(prevstate)
        })
        // this.setState({count: this.state.count + 1},()=>{
        //     this.setState({count:this.state.count+1})
        // });
        // this.setState({count: this.state.count + 2});
        // this.setState({count: this.state.count + 3});
        // 这三次的改变其实只会是实现最后一次的+3操作的
      }
    render(){
        return <div>
        <input onClick={this.fn.bind(this)} type="button" value='加上'/>
        {this.state.count}
            {/* <input id='s' type="text" ref={(el)=>{this.suninput=el}}/> */}
        </div>
    }
}
export default App;
