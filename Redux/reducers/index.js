import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {testReducer} from '../../src/redux/reducer'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

const rootReducer = combineReducers({
    testReducer,
});

export default persistReducer(persistConfig, rootReducer);
