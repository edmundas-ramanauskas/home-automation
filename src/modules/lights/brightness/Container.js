import { compose, mapProps, withHandlers } from 'recompose';
import withSelectedDevice from '../withSelectedDevice';
import Component from './Component';

export default compose(
  withSelectedDevice,
  mapProps(({ device, ...props }) => ({
    ...props,
    ...device,
  })),
  withHandlers({
    onChange: ({ id, setBrightness }) => value => {
      setBrightness(id, Math.round(value * 100));
    },
  }),
)(Component);
