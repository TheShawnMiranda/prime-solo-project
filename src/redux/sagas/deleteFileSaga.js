import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "LOGOUT" actions
function* deleteUserData(action) {
  try {

    console.log('This is action payload', action.payload);
    yield axios.delete(`/data/${action.payload}`);
    yield put({ type: 'UNSET_DATA' });

  } catch (error) {
    console.log('Error with user logout:', error);
  }
}

function* deleteFileSaga() {
  yield takeLatest('DELETE', deleteUserData);
}

export default deleteFileSaga;