import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* postNewData(action) {
    try {

        const response = yield axios.put('/data', action.payload);

    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* editDataSaga() {
    yield takeLatest('EDIT_DATA', postNewData);
}

export default editDataSaga;