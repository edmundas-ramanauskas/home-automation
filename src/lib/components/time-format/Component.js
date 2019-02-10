import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { identity, memoizeWith } from 'ramda';
import locale2 from 'locale2';

const memoizedDateFormat = memoizeWith(
  identity,
  locale =>
    new Intl.DateTimeFormat(locale, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }),
);

const TimeFormat = ({ locale = locale2, value }) => (
  <Fragment>{memoizedDateFormat(locale).format(new Date(value))}</Fragment>
);

TimeFormat.propTypes = {
  locale: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default TimeFormat;
