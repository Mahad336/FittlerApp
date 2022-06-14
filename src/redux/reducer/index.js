import {ActionTypes} from '../types';

const initialState = {
  data:'',
  appLoader: false,
  allCalories:0
};

const testReducer = (state = initialState, action) =>{
    switch(action.type){
        case ActionTypes.TEST_ACTION:
            return {...state, data: action.data};
        case ActionTypes.APP_LOADER:
            return {...state, appLoader: action.data}
        case ActionTypes.UPDATED_CALORIES:
            return {...state, allCalories: action.data};
        default:
            return state;
    }
}


const profileData ={
    user:''
}
const profileReducer = (state = profileData, action) => {
  switch (action.type) {
    case ActionTypes.GET_PROFILE_DATA:
      return {...state, user: action.data};
    default:
      return state;
  }
};
export {testReducer, profileReducer};