import { connect } from 'react-redux';
import { compose } from 'recompose';
import { createStructuredSelector } from 'reselect';
import omitProps from '../../lib/omitProps';
import { getDevices, getSelected, selectDevice, toggleDevice } from './ducks';

export default compose(
  connect(
    createStructuredSelector({
      devices: getDevices,
      selected: getSelected,
    }),
    {
      selectDevice,
      toggleDevice,
    },
  ),
  omitProps(['dispatch']),
);
