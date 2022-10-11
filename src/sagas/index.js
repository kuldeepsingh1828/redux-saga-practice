import { takeLatest } from 'redux-saga/effects'
import { userHandler, user1Handler } from './handlers/userHandler'

export function* watcher() {
    console.log("SAGA IS WORKING...")
    yield takeLatest('GET_USER', userHandler);
}
export function* watcher1() {
    console.log("SAGA IS WORKING...")
    yield takeLatest('GET_USER_1', user1Handler, 1);
} 