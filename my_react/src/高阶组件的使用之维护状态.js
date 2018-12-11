import React, { Component } from 'react';
import './App.css';
function heightControl(WrapCom){
    return (
        class extends Component{
            constructor(props){
                super(props);
                this.state={
                    value:''
                };
                this.handFn=this.handFn.bind(this);
            }
            handFn(e){
                this.setState({value:e.target.value});
            }
            render(){
                // 保存受控组件需要维护的属性和事件
                const controlProps={
                    value:this.state.value,
                    handFn:this.handFn
                };
                return (
                    <WrapCom  {...controlProps}/>
                )
            }
        }
    )
}
class Apps extends Component{
    static defaultProps={
        qiao:'',
        ss:''
    };
    render(){
        console.log(this.props)
        return (
            <div>
                <input type="text" onChange={this.props.handFn}/>
                <input type="text" defaultValue={this.props.value}/>
            </div>
        )
    }
}
const App=heightControl(Apps);
export default App;