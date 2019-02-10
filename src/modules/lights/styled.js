import styled from '@emotion/styled';

export const Cell = styled.div({
  display: 'flex',
  alignItems: 'center',
});

export const Wrapper = styled.div({
  display: 'flex',
});

export const Box = styled.div({}, ({ width }) => ({
  width: `${width}%`,
}));
