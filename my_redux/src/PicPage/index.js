import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../actions";
class PicPage extends Component{
  componentDidMount(){
    this.props.getPic();
  }
  render(){
    let { pic } = this.props.picRedux;
    let texts = pic.map(el=>el.text);
    let images = pic.map(el=>el.image);
    return (
    <div className='content'>
      {images.map((el,index)=>{
        return( 
        <div className='happy_box' key={el+index}>
          <p className='happy_title happy_text'>{texts[index]}</p>
          <img src={el} alt="" className='happy_img'/>
        </div>
        ) 
      })}
    </div>
    )
  }
}
const mapStateToProps = state => state;
const getPic=actions.getPic;
export default connect(mapStateToProps,{getPic})(PicPage);
