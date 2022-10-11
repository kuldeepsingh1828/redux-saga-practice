import { call, put } from 'redux-saga/effects';
import { getUser, getUserById } from '../requests/UserRequest';
import { setUserData } from '../../redux/actions';

export function* userHandler() {
    try {
        const response = yield call(getUser);
        yield put(setUserData(response.data));
    } catch (err) {
        console.log(err);
    }
}

export function* user1Handler(id) {
    try {
        const response = yield call(getUserById, id);
        yield put(setUserData([response.data]));
    } catch (err) {
        console.log(err);
    }
}