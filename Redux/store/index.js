// Imports: Dependencies
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';
// Imports: Redux Root Reducer
import persistedReducer from '../reducers';
// Imports: Redux Root Saga
import {rootSaga} from '../saga';
import {persistStore} from 'redux-persist';

// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();

// Redux: Store
const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware, createLogger()),
);
const persistor = persistStore(store);
// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);
// Exports
export {store};
export {persistor};
// export type RootState = ReturnType<typeof store.getState>; // type of root reducer
