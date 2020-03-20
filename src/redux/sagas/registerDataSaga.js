import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* registerUserData(action) {
  try {
    // clear any existing error on the registration page
    yield put({ type: 'CLEAR_REGISTRATION_ERROR' });

    // passes the username and password from the payload to the server
    console.log(action.payload);
    yield axios.post('/data', action.payload);
    

    // passes the rest of the details to the server

    // automatically log a user in after registration
    //yield put({ type: 'LOGIN', payload: action.payload });
    
    // set to 'login' mode so they see the login screen
    // after registration or after they log out
    //yield put({type: 'SET_TO_LOGIN_MODE'});
  } catch (error) {
      console.log('Error with user registration:', error);
      yield put({type: 'REGISTRATION_FAILED'});
  }
}

function* registerDataSaga() {
  yield takeLatest('REGISTER_DATA', registerUserData);
}

export default registerDataSaga;