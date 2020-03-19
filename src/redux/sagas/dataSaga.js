import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchData() {
    console.log("Hello from generator function fetchData");
    try {

        const response = yield axios.get('/data');
        yield put({ type: 'SET_DATA', payload: response.data });

    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* dataSaga() {
    yield takeLatest('FETCH_DATA', fetchData);
}

export default dataSaga;