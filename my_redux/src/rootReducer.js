import { combineReducers } from 'redux'
import textRedux from './TextPage/reducer'
import picRedux from './PicPage/reducer'

const rooReducer=combineReducers({
  textRedux,
  picRedux
});
export default rooReducer;