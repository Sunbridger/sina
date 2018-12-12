import { createStore,applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import rootReducer from "./rootReducer";
let sagaMiddleware = createSagaMiddleware();

let store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// window.store = store; 方便在控制台

sagaMiddleware.run(rootSaga);

export default store;
