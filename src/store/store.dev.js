/* eslint-disable no-unused-vars */
import { createStore, applyMiddleware, compose } from 'redux';
import { throttle } from 'lodash';
import createSageMiddleware from 'redux-saga';
import reducers from '../reducers';
import logger from 'redux-logger';
import rootSaga from '../sagas';


const sagaMiddleware = createSageMiddleware();
let middleware;
if (process.env.NODE_ENV === 'development') {
  middleware = applyMiddleware(sagaMiddleware, logger);
} else {
  middleware = applyMiddleware(sagaMiddleware);
}


const storeConfig = () => {
  const storeCompose = compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f);

  const store = createStore(reducers, storeCompose);

  

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};

export default storeConfig;