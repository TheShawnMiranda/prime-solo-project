import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchData() {
    try {

        const response = yield axios.get('/data/donor');
        yield put({ type: 'SET_DONOR_DATA', payload: response.data });
        console.log(response.data);

    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* donorDataSaga() {
    yield takeLatest('GET_DONOR_DATA', fetchData);
}

export default donorDataSaga;