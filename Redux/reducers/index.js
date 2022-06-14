import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {testReducer, profileReducer} from '../../src/redux/reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['profileReducer'],
};

const rootReducer = combineReducers({
  testReducer,
  profileReducer,
});

export default persistReducer(persistConfig, rootReducer);
