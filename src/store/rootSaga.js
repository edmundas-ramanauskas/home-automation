import { map } from 'ramda';
import { all, fork, put } from 'redux-saga/effects';
import { saga as lighting } from '../modules/lighting';

const sagas = [lighting];

const forkAllModuleSagas = map(fork);

export default function* saga() {
  yield all(forkAllModuleSagas(sagas));
  yield put({ type: 'INIT' });
}
