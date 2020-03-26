import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

let donorTypeArray = [];
let recipientTypeArray = [];

// worker Saga: will be fired on "FETCH_USER" actions
function* matcherFunction() {
    try {

        const response = yield axios.get('/data/all');

        yield put({ type: 'SET_ALL_DATA', payload: response.data });

        for (let pairObject of response.data) {
            donorTypeArray.push(pairObject.donor_blood_type);
            recipientTypeArray.push(pairObject.recipient_blood_type);
        }

        console.log(donorTypeArray);
        console.log(recipientTypeArray);

        for (let bloodType of donorTypeArray) {
            if (recipientTypeArray.includes(bloodType)) {
                console.log(yield donorTypeArray.indexOf(bloodType));
                console.log(yield recipientTypeArray.indexOf(bloodType));
            }
        }

        //console.log("This is your response data", response.data);

    } catch (error) {
        console.log('Matcher Failed', error);
    }
}

function* matcherSaga() {
    yield takeLatest('RUN_MATCHER', matcherFunction);
}

export default matcherSaga;