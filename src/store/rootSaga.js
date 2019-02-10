import { map } from 'ramda';
import { all, fork, put } from 'redux-saga/effects';
import { saga as lights } from '../modules/lights';

const sagas = [lights];

const forkAllModuleSagas = map(fork);

export default function* saga() {
  yield all(forkAllModuleSagas(sagas));
  yield put({ type: 'INIT' });
}
