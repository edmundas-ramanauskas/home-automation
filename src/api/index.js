import Lights from './Lights';

const lights = new Lights();

export const getDevices = () => lights.getDevices();

export const getDevice = id => lights.getDevice(id);

export const updateDevice = (id, data) => lights.updateDevice(id, data);
