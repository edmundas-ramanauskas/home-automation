import React from 'react';
import Toggle from '../../lib/components/toggle';
import { Cell } from './styled';

export default ({ onToggleDevice }) => [
  {
    field: 'name',
    label: 'Room',
    render: value => <Cell>{value}</Cell>,
  },
  {
    field: 'active',
    label: 'State',
    render: (value, { id }) => {
      return (
        <Toggle active={value} onChange={value => onToggleDevice(id, value)} />
      );
    },
  },
  {
    field: 'brightness',
    label: 'Brightness',
    render: value => <Cell>{`${value}%`}</Cell>,
  },
];
