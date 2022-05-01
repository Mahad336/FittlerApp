import {ActionTypes} from '../types';

const initialState = {
  data:'',
  appLoader: false
};

const testReducer = (state = initialState, action) =>{
    switch(action.type){
        case ActionTypes.TEST_ACTION:
            return {...state, data: action.data};
        case ActionTypes.APP_LOADER:
            return {...state, appLoader: action.data}
        default:
            return state;
    }
}

export {testReducer}