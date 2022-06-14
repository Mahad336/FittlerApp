import {takeLatest, put} from 'redux-saga/effects';
import {ActionTypes} from '../types';
import {appLoader, getProfileData, updatedCalories} from '../action';
import Toast from 'react-native-toast-message';
import {
  signUp,
  setUserData,
  signIn,
  updateProfile,
  getUserData,
  getCaloriesData,
  addCaloriesData,
} from '../../requests';

function* loginRequest(params) {
  let data = params.data.postData;
  let postData = {email: data.email, password: data.password};
  try {
    // put app loader true
    yield put(appLoader(true));
    // signUp method call to create new user
    const response = yield signUp(postData);
    // set user's additional data to firestore
    yield setUserData({
          email: response?.user?.email,
          uid: response?.user?.uid,
          gender: data.Gender,
          name: data.name,
          feet: data.feet,
          inches: data.inches,
          currentWeight: data.currentWeight,
          goalWeight: data.goalWeight,
          age: data.age,
        });
    // get new user's all data from firestore
    const res = yield getUserData()
    // set user's data into redux state
    yield put(getProfileData(res[0]));
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
  try {
    yield put(appLoader(true));
    // method call to singIn existing user
    const response = yield signIn(postData);
    // get user's all data from firestore
    const res = yield getUserData()
    // set user's data into redux state
    yield put(getProfileData(res[0]));
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

function* profileUpdateRequest(params) {
  let {postData} = params.data;
  try {
    yield put(appLoader(true));
    // method to set updated data for user profile
    const response = yield updateProfile(postData);
    // get user's all data from firestore
    const res = yield getUserData()
    // set user's data into redux state
    yield put(getProfileData(res[0]));
    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: 'Profile Data Updated Successfully',
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

function* addCalories(params) {
  let {postData} = params.data;
  try {

    yield put(appLoader(true));
    const res = yield getCaloriesData()
    const response = yield addCaloriesData(postData.data+res);
    const allCal = yield getCaloriesData()
    yield put(updatedCalories(allCal));
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
  yield takeLatest(ActionTypes.PROFILE_UPDATE_REQUEST, profileUpdateRequest);
  yield takeLatest(ActionTypes.ADD_CALORIES, addCalories);
}
