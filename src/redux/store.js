import { applyMiddleware, createStore } from "redux";
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import { watcher1, watcher } from "../sagas";
let sagaMiddleWare = createSagaMiddleware();
let middleware = [sagaMiddleWare];

let store = createStore(reducer, applyMiddleware(...middleware));
sagaMiddleWare.run(watcher);
sagaMiddleWare.run(watcher1);
export default store;