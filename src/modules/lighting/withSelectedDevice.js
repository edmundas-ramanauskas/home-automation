import { connect } from 'react-redux';
import { compose } from 'recompose';
import { createStructuredSelector } from 'reselect';
import omitProps from '../../lib/omitProps';
import { getSelectedDevice, setBrightness } from './ducks';

export default compose(
  connect(
    createStructuredSelector({
      device: getSelectedDevice,
    }),
    {
      setBrightness,
    },
  ),
  omitProps(['dispatch']),
);
