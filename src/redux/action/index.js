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