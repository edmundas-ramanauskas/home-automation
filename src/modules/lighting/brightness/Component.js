import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { ArcSlider } from 'rendition';
import { Wrapper } from './styled';

const Brightness = ({ brightness, onChange }) => (
  <Wrapper>
    <ArcSlider value={brightness / 100} onValueChange={onChange}>
      <div>
        <h2>{brightness}%</h2>
        <h5>Brightness</h5>
      </div>
    </ArcSlider>
  </Wrapper>
);

Brightness.propTypes = {
  brightness: PropTypes.number.isRequired,
};

export default memo(Brightness);
