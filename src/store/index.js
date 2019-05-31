import { createLogger } from 'redux-logger';
import { compose, applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export default (rootReducer, rootSaga) => {
  let enhancers = compose;

  if (__DEV__) {
    enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }

  const logger = createLogger();
  const store = createStore(rootReducer, enhancers(applyMiddleware(sagaMiddleware), applyMiddleware(logger)));

  if (rootSaga) sagaMiddleware.run();

  return store;
};
