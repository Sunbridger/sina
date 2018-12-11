import React, { Component } from 'react';
import {SonFn} from './Son';
import $ from 'jquery';
import './App.css';
class App extends Component{
    state={
        store:'' 
    }
    _mount=false;
    componentDidMount(){
        // render完毕之后才是挂载完成
        this._mount=true;
        this.getData()
    }
    async getData(){
        let data=await SonFn();
        this.setState({
            store:data
        });
    }
    render(){
        console.log(this.state.store)
        return <div>
            <Bpp b={this.state.store.subjects} /> 
        </div>
    }
}
class Bpp extends Component{
    render(){
        /*
    在父组件来渲染子组件或者是在传递数据给子组件，
    其中data是ajax返回的数据，当第一次挂载的时候，
    由于data初始值是{}，所以map也就没有实际渲染子组件。
    当ajax返回后，再次SetState时，才会渲染子组件。此处不给默认会报错
    所以造成了我认为ajax请求返回之后再渲染子组件的误区。 */
        let arr=this.props.b||[];
        return <div>
            {arr.map((el,i)=>{
                return <div key={el+i}>
                    <p>
                    标题：{el.title}
                    </p>
                    <p>
                    领域：{el.genres.map((ele,i)=>{
                        return <span key={ele+i}>
                            {ele}  
                        </span>
                    })}
                    </p>
                </div>
            })}
        </div>
    }
}

export default App;
