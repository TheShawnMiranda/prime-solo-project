import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* matcherFunction() {
    try {

        const response = yield axios.get('/data/all');

        let people = response.data;
        let newDonorType = '';
        let nextPerson = {};

        for (let person of people) {
            nextPerson = people[people.indexOf(person) + 1]
            if (checker(person, nextPerson)) {
                newDonorType = nextPerson.donor_blood_type;
            } else {
                newDonorType = person.donor_blood_type;
            }
        }

        yield put({ type: 'SET_ALL_DATA', payload: people });
        //console.log("This is your response data", response.data);

    } catch (error) {
        console.log('Matcher Failed', error);
    }
}

function checker(object1, object2) {
    if (object1.donor_blood_type === object2.recipient_blood_type) {
        return true;
    }
}

function* matcherSaga() {
    yield takeLatest('RUN_MATCHER', matcherFunction);
}

export default matcherSaga;