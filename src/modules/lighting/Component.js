import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'rendition';
import getColumns from './columns';
import { Box, Wrapper } from './styled';
import Brightness from './brightness';

const Lighting = ({ devices, selected, onSelectDevice, onToggleDevice }) => (
  <Wrapper>
    <Box width={60}>
      <Table
        rowKey="id"
        columns={getColumns({ onToggleDevice })}
        data={devices}
        highlightedRows={[selected]}
        onRowClick={({ id }) => onSelectDevice(id)}
      />
    </Box>
    <Box width={40}>{!!selected && <Brightness />}</Box>
  </Wrapper>
);

Lighting.propTypes = {
  devices: PropTypes.arrayOf(PropTypes.object).isRequired,
  selected: PropTypes.number,
  onSelectDevice: PropTypes.func.isRequired,
  onToggleDevice: PropTypes.func.isRequired,
};

export default Lighting;
