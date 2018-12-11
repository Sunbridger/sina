import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
class App extends Component{
    constructor(props){
        super(props);
        this.state={
            searchWord:''
        };
        this.arr=[];
    }
    getData(e){
        this.setState({
            searchWord:e.target.value
        }) 
    }
        // 遇到的问题就是拿不到同步的数据
    render(){
        let _this=this;
        $.ajax({ 
            url:'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?', 
            dataType:'jsonp', 
            data:{wd:this.state.searchWord}, 
            jsonp:'cb',
            success:function(res) {
                console.log(res.s,'2222')
                _this.arr=res.s;
            }
        });
        return <div>
            <input type="text" onChange={this.getData.bind(this)}/>
            {
                this.arr.map((el,i)=>{
                    return <p key={el+i}>{el}</p>
                })
            }
        </div>
    }
}
export default App;
