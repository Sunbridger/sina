import * as Actions from "../actions";
import { combineReducers } from "redux";
const initState = {
  text:[]
};

const text=(state=initState,action)=>{
  switch(action.type){
    case Actions.totext:
    let {text} = action;
    console.log(action,'文章sss')
    return Object.assign({},state,{text});
    default :
    return state;
  }
}

export default text;