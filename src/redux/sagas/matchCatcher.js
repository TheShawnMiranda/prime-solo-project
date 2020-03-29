import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getMatchData () {
    console.log("getMatch hit!")
    const response = yield axios.get('/matches');
    yield put({ type: 'SET_MATCH', payload: response.data[0] });
}

function* matchCatcher() {
    yield takeLatest('GET_MATCH', getMatchData);
}

export default matchCatcher;