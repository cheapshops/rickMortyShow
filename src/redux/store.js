import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer  from './reducers'
import rootSaga from './saga'

const middleware = [];
const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);

if (process.env.NODE_ENV !== "production") {
  const { createLogger } = require("redux-logger");
  const logger = createLogger({
    collapsed: true
  });
  middleware.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleware));

const rootSagaTask = sagaMiddleware.run(rootSaga);