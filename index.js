

import React from 'react';
import { AppRegistry } from 'react-native';
import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import App from './src/containers/Home';
import { name as appName } from './app.json';
// import store from './src/store';
import booksReducer from './src/store/reducer';
import rootSaga from './src/store/sagas';

import creatSagaMiddleware from 'redux-saga';

const reducers = combineReducers({
  books: booksReducer
});
// const STORE = store(reducers, rootSaga);
// const connectedApp = (
//   <Provider store={STORE}>
//     <App />
//   </Provider>
// );

let enhancers = compose;

if (__DEV__) {
  enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const sagaMiddleware = creatSagaMiddleware();
const storage = createStore(reducers, enhancers(applyMiddleware(sagaMiddleware)));

const connected = () => (
  <Provider store={storage}>
    <App />
  </Provider>
);
sagaMiddleware.run(rootSaga);

AppRegistry.registerComponent(appName, () => connected);
