import * as Actions from "../actions";
import { combineReducers } from "redux";
const initState = {
  pic:[]
};

const pic=(state=initState,action)=>{
  switch(action.type){
    case Actions.topic:
    let {pic} = action;
    return Object.assign({},state,{pic});
    default :
    return state;
  }
}

export default pic;