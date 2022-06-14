import {ActionTypes} from '../types'

export const loginRequest = (data) => ({
  type: ActionTypes.LOGIN_REQUEST,
  data,
});

export const signInRequest = (data) => ({
  type: ActionTypes.SIGN_IN_REQUEST,
  data,
})
 
export const testActon = (data) => ({
    type: ActionTypes.TEST_ACTION,
    data,
})
export const appLoader = (data) => ({
    type: ActionTypes.APP_LOADER,
    data,
})

export const profileUpdateRequest = data => ({
  type: ActionTypes.PROFILE_UPDATE_REQUEST,
  data,
});

export const getProfileData = data => ({
  type: ActionTypes.GET_PROFILE_DATA,
  data,
});

export const addCalories = data => ({
  type: ActionTypes.ADD_CALORIES,
  data
});

export const updatedCalories = data => ({
  type: ActionTypes.UPDATED_CALORIES,
  data
});