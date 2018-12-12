import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../actions";
class TextPage extends Component{
  componentDidMount(){
    this.props.getText()
  }
  render(){
    let { text } = this.props.textRedux;
    let texts = text.map(el=>el.text);
    console.log(texts)
    return (
      <div className='content'>
        {texts.map((el,index)=>{
        return( 
        <div className='happy_box' key={el+index}>
          {/* <img className='happy_logo' src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2048439579,1840605849&fm=58&s=B1B4CF32D4E509137437F3E90300302D&bpow=121&bpoh=75" alt=""/> */}
          <p className='happy_title'>{el}</p>
        </div>
        ) 
      })}
      </div>
    )
  }
}
const mapStateToProps = state => state;
const getText=actions.getText;
export default connect(mapStateToProps,{getText})(TextPage);
