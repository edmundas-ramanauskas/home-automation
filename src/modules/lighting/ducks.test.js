import { call, put } from 'redux-saga/effects';
import { getAction, getNext } from '../../lib/testHelpers';
import { getDevices as fetchDevices, updateDevice } from '../../api';
import {
  UPDATE_DEVICES,
  SELECT_DEVICE,
  TOGGLE_DEVICE,
  SET_BRIGHTNESS,
  updateDevices,
  selectDevice,
  toggleDevice,
  setBrightness,
  devicesReducer,
  selectedReducer,
  getDevices,
  getSelected,
  getSelectedDevice,
  fetchDevicesSaga,
  updateDeviceSaga,
} from './ducks';

const devices = [
  {
    id: 1,
    name: 'Room',
    active: false,
    brightness: 50,
  },
];

describe('actions', () => {
  it('updateDevices', () => {
    const action = updateDevices(devices);
    expect(action).toEqual(getAction(UPDATE_DEVICES, { devices }));
  });

  it('selectDevice', () => {
    const id = 1;
    const action = selectDevice(id);
    expect(action).toEqual(getAction(SELECT_DEVICE, { id }));
  });

  it('toggleDevice', () => {
    const id = 1;
    const active = false;
    const action = toggleDevice(id, active);
    expect(action).toEqual(getAction(TOGGLE_DEVICE, { id, active }));
  });

  it('setBrightness', () => {
    const id = 1;
    const brightness = 100;
    const action = setBrightness(id, brightness);
    expect(action).toEqual(getAction(SET_BRIGHTNESS, { id, brightness }));
  });
});

describe('reducers', () => {
  it('devicesReducer - updateDevices', () => {
    const state = devicesReducer([], updateDevices(devices));
    expect(state).toEqual(devices);
  });

  it('devicesReducer - toggleDevice', () => {
    const id = 1;
    const active = true;
    const state = devicesReducer(devices, toggleDevice(id, active));
    expect(state).toEqual(
      devices.map(device => {
        if (device.id === id) {
          return {
            ...device,
            active,
          };
        }
        return device;
      }),
    );
  });

  it('devicesReducer - setBrightness', () => {
    const id = 1;
    const brightness = 100;
    const state = devicesReducer(devices, setBrightness(id, brightness));
    expect(state).toEqual(
      devices.map(device => {
        if (device.id === id) {
          return {
            ...device,
            active: true,
            brightness,
          };
        }
        return device;
      }),
    );
  });

  it('selectedReducer', () => {
    const id = 1;
    const state = selectedReducer(null, selectDevice(id));
    expect(state).toEqual(id);
  });
});

describe('selectors', () => {
  const selected = 1;
  const state = {
    lighting: {
      devices,
      selected,
    },
  };

  it('getDevices', () => {
    expect(getDevices(state)).toEqual(devices);
  });

  it('getSelected', () => {
    expect(getSelected(state)).toEqual(selected);
  });

  it('getSelectedDevice', () => {
    expect(getSelectedDevice(state)).toEqual(devices[0]);
  });
});

describe('sagas', () => {
  it('fetchDevicesSaga', () => {
    const response = {
      data: {
        data: devices,
      },
    };

    const next = getNext(fetchDevicesSaga);

    const callFetchDevices = next();
    expect(callFetchDevices).toEqual(call(fetchDevices));

    const putUpdateDevices = next(response);
    expect(putUpdateDevices).toEqual(put(updateDevices(devices)));
  });

  it('updateDeviceSaga', () => {
    const id = 1;
    const active = true;

    const next = getNext(updateDeviceSaga, { id, active });

    const callUpdateDevice = next();
    expect(callUpdateDevice).toEqual(call(updateDevice, id, { active }));
  });
});
