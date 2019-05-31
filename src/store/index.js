import React from 'react';
import { createLogger } from 'redux-logger';
import { compose, applyMiddleware, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import App from '../containers/Home';
import rootSaga from './sagas';
import booksReducer from './reducer';

export default class connectedApp extends React.Component {
  createStoreFunc = () => {
    let enhancers = compose;
    const sagaMiddleware = createSagaMiddleware();

    const rootReducer = combineReducers({
      books: booksReducer
    });

    if (__DEV__) {
      enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    }

    const logger = createLogger();
    const store = createStore(rootReducer, enhancers(applyMiddleware(sagaMiddleware), applyMiddleware(logger)));

    if (rootSaga) sagaMiddleware.run(rootSaga);

    return store;
  };

  render() {
    const store = this.createStoreFunc();
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
