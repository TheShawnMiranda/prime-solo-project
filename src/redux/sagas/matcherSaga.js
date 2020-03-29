import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

let donorTypeArray = [];
let recipientTypeArray = [];

// worker Saga: will be fired on "FETCH_USER" actions
function* matcherFunction() {
    try {

        const response = yield axios.get('/data/all');

        for (let pairObject of response.data) {
            donorTypeArray.push(pairObject.donor_blood_type);
            recipientTypeArray.push(pairObject.recipient_blood_type);
        }

        const donor_id_array = [];
        const recipient_id_array = [];

        for (let bloodType of donorTypeArray) {
            if (recipientTypeArray.includes(bloodType)) {
                recipient_id_array.push(yield recipientTypeArray.indexOf(bloodType)+1);
            }
        }
        for (let bloodType of recipientTypeArray) {
            if (donorTypeArray.includes(bloodType)) {
                donor_id_array.push(yield donorTypeArray.indexOf(bloodType)+1);
            }
        }

        let donorAndRecipientIDs = {
            donors: donor_id_array,
            recipients: recipient_id_array
        }

        axios.post('/matches', donorAndRecipientIDs);

    } catch (error) {
        console.log('Matcher Failed', error);
    }
}

function* matcherSaga() {
    yield takeLatest('RUN_MATCHER', matcherFunction);
}

export default matcherSaga;