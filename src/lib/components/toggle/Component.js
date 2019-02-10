import React, { memo } from 'react';
import Switch from 'rc-switch';
import { Label, Wrapper } from './styled';
import './switch.scss';

const Toggle = ({ active, onChange }) => (
  <Wrapper>
    <Switch checked={active} onChange={onChange} />
    <Label>{active ? 'On' : 'Off'}</Label>
  </Wrapper>
);

export default memo(Toggle);
