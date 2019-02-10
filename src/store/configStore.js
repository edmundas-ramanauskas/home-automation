import { once } from 'ramda';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import logger from '../lib/logger';
import createReducer from './rootReducer';

// basic logger middleware
const loggerMiddleware = () => next => action => {
  const { type, ...params } = action;
  logger.debug('ACTION', type, params);
  return next(action);
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default once(history => {
  const rootReducer = createReducer(history);
  const store = createStore(
    rootReducer,
    composeEnhancer(
      applyMiddleware(
        loggerMiddleware,
        routerMiddleware(history),
      ),
    ),
  );

  return { store };
});
