import { once } from 'ramda';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as lighting } from '../modules/lighting';

export default once(history =>
  combineReducers({
    router: connectRouter(history),
    lighting,
  }),
);
