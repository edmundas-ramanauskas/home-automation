import styled from '@emotion/styled';
import { Container as RContainer } from 'rendition';

export const Container = styled(RContainer)({
  minWidth: 420,
  '@media (max-width: 768px)': {
    margin: 0,
    padding: 0,
  },
});
