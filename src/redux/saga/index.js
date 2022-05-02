import {takeLatest, put} from 'redux-saga/effects';
import {ActionTypes} from '../types';
import {appLoader} from '../action';
import Toast from 'react-native-toast-message';
import {signUp, setUserData, signIn} from '../../requests';

function* loginRequest(params) {
  let data = params.data.postData;
  let postData = {email: data.email, password: data.password};
  try {
    yield put(appLoader(true));
    const response = yield signUp(postData);
    const res = yield setUserData({
          email: response.user.email,
          uid: response.user.uid,
          gender: data.Gender,
          name: data.Name,
          height: data.Height,
          currentWeight: data.CurrentWeight,
          goalWeight: data.GoalWeight,
          age: data.Age,
        });
    Toast.show({
      type: 'success',
      text1: 'Logged In',
      text2: 'Logged in successfully',
      visibilityTime: 3000,
    });
    yield put(appLoader(false));
  } catch (e) {
    yield put(appLoader(false));
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: e?.message,
      visibilityTime: 3000,
    });
  }
}


function* signInRequest(params) {
  let {postData} = params.data;
  console.log('dddd',postData);
  try {
    yield put(appLoader(true));
    const response = yield signIn(postData);
    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: 'Sign in successfully',
      visibilityTime: 3000,
    });
    yield put(appLoader(false));
  } catch (e) {
    yield put(appLoader(false));
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: e?.message,
      visibilityTime: 3000,
    });
  }
}


export function* authSaga() {
  yield takeLatest(ActionTypes.LOGIN_REQUEST, loginRequest);
  yield takeLatest(ActionTypes.SIGN_IN_REQUEST, signInRequest);
}
