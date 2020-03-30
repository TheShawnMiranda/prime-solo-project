import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchData() {
    try {

        const response = yield axios.get('/data/recipient');
        yield put({ type: 'SET_RECIPIENT_DATA', payload: response.data });
        console.log(response.data);

    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* recipientDataSaga() {
    yield takeLatest('GET_RECIPIENT_DATA', fetchData);
}

export default recipientDataSaga;