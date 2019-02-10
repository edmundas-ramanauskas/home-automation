import { nthArg, pick, pipe, prop, propEq } from 'ramda';
import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import rereducer from 'rereducer';
import { call, debounce, put, takeEvery } from 'redux-saga/effects';
import { getDevices as fetchDevices, updateDevice } from '../../api';

// types
export const UPDATE_DEVICES = 'LIGHTING/UPDATE_DEVICES';
export const SELECT_DEVICE = 'LIGHTING/SELECT_DEVICE';
export const TOGGLE_DEVICE = 'LIGHTING/TOGGLE_DEVICE';
export const SET_BRIGHTNESS = 'LIGHTING/SET_BRIGHTNESS';

// actions
export const updateDevices = devices => ({
  type: UPDATE_DEVICES,
  devices,
});

export const selectDevice = id => ({
  type: SELECT_DEVICE,
  id,
});

export const toggleDevice = (id, active) => ({
  type: TOGGLE_DEVICE,
  id,
  active,
});

export const setBrightness = (id, brightness) => ({
  type: SET_BRIGHTNESS,
  id,
  brightness,
});

// reducers
export const devicesReducer = rereducer(
  [],
  [
    UPDATE_DEVICES,
    pipe(
      nthArg(1),
      prop('devices'),
    ),
  ],
  [
    TOGGLE_DEVICE,
    (devices, { id, active }) =>
      devices.map(device => {
        if (device.id === id) {
          return {
            ...device,
            active,
          };
        }
        return device;
      }),
  ],
  [
    SET_BRIGHTNESS,
    (devices, { id, brightness }) =>
      devices.map(device => {
        if (device.id === id) {
          return {
            ...device,
            brightness,
            ...(brightness ? { active: true } : { active: false }),
          };
        }
        return device;
      }),
  ],
);

export const selectedReducer = rereducer(null, [
  SELECT_DEVICE,
  pipe(
    nthArg(1),
    prop('id'),
  ),
]);

export const reducer = combineReducers({
  devices: devicesReducer,
  selected: selectedReducer,
});

// selectors
const modulePath = prop('lighting');

export const getDevices = createSelector(
  modulePath,
  prop('devices'),
);
export const getSelected = createSelector(
  modulePath,
  prop('selected'),
);
export const getSelectedDevice = createSelector(
  modulePath,
  ({ devices, selected }) => devices.find(propEq('id', selected)),
);

// sagas
function* fetchDevicesSaga() {
  const { data, error } = yield call(fetchDevices);
  if (error || data.errors) {
    // do something
    return;
  }
  yield put(updateDevices(data.data));
}

function* updateDeviceSaga({ id, ...props }) {
  yield call(updateDevice, id, pick(['active', 'brightness'])(props));
}

export function* saga() {
  yield call(fetchDevicesSaga);
  yield takeEvery(TOGGLE_DEVICE, updateDeviceSaga);
  yield debounce(500, SET_BRIGHTNESS, updateDeviceSaga);
}
