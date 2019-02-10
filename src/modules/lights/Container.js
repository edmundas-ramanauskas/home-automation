import { compose, withHandlers } from 'recompose';
import withDevices from './withDevices';
import Component from './Component';

export default compose(
  withDevices,
  withHandlers({
    onSelectDevice: ({ selectDevice }) => id => {
      selectDevice(id);
    },
    onToggleDevice: ({ toggleDevice }) => (id, value) => {
      toggleDevice(id, value);
    },
  }),
)(Component);
