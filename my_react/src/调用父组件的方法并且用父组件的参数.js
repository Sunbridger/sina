import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import Son2 from './Son2'
class App extends Component{
    alertName(a){
        alert(a)
    }
    state={
        name:'父亲的名字'
    }
    pullOriData(){
        this.setState({
            name:'拉取到父亲的名字'
        })    
    }
    changeName(e){
        this.setState({
            name:e
        })
    }
    render(){
        return <div>
        <Son2 changeName={this.changeName.bind(this)} funame={this.state.name} callback={this.alertName.bind(this)} pullOriData={this.pullOriData.bind(this)}/>
        </div>
    }
}
export default App;
