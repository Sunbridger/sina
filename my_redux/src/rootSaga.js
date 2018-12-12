import { take, put, call, fork, select, all } from "redux-saga/effects";
import * as actions from "./actions";
import {textType,picType} from '../api';
function* getText() {
  while (true) {
    yield take(actions.text)
    let res = yield call(textType);
    console.log(res,'文章');
    yield put({type:actions.totext,text:res.data});
  }
}
function* getPic() {
  while (true) {
    yield take(actions.pic)
    let res = yield call(picType);
    yield put({type:actions.topic,pic:res.data});
  }
}
export default function* root() {
  yield fork(getText);
  yield fork(getPic);
}