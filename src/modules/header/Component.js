import React from 'react';
import DateFormat from '../../lib/components/date-format';
import TimeFormat from '../../lib/components/time-format';
import Container from '../../lib/components/container';
import { Box, NavBar, Wrapper } from './styled';

const now = Date.now();

export default () => (
  <Wrapper>
    <Container>
      <NavBar>
        <Box>
          <DateFormat value={now} />
        </Box>
        <Box>
          <TimeFormat value={now} />
        </Box>
        <Box />
      </NavBar>
    </Container>
  </Wrapper>
);
