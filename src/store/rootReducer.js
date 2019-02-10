import { once } from 'ramda';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

export default once((history) =>
  combineReducers({
    router: connectRouter(history),
  }),
);
