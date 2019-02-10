
import Base from './Base';
import {API_URL} from '../config';

export default class Tweets extends Base {
  base = API_URL;

  getDevices() {
    return this.get({
      path: 'v1/device',
    });
  }

  getDevice(id) {
    return this.get({
      path: `v1/device/${id}`,
    });
  }

  updateDevice(id, data) {
    return this.patch({
      path: `v1/device/${id}`,
      data: { data },
    });
  }
}
