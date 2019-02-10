import { once } from 'ramda';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as lights } from '../modules/lights';

export default once(history =>
  combineReducers({
    router: connectRouter(history),
    lights,
  }),
);
