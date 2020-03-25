import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* matcherFunction() {
    try {

        const response = yield axios.get('/data/all');

        let people = response.data;
        let donorTypeNeeded = '';

        for (let person of people) {
            donorTypeNeeded = person.recipient_blood_type;
            recipientTypeNeeded = person.donor_blood_type;
            for (nextPerson of people) {
                if (nextPerson.)
            }
        }

        yield put({ type: 'SET_ALL_DATA', payload: people });
        //console.log("This is your response data", response.data);

    } catch (error) {
        console.log('Matcher Failed', error);
    }
}

function* matcherSaga() {
    yield takeLatest('RUN_MATCHER', matcherFunction);
}

export default matcherSaga;