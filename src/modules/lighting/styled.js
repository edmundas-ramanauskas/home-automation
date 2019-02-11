import styled from '@emotion/styled';

const minWidth = 768;

export const Cell = styled.div({
  display: 'flex',
  alignItems: 'center',
});

export const Wrapper = styled.div({
  display: 'flex',
  alignItems: 'stretch',
  [`@media (max-width: ${minWidth}px)`]: {
    flexDirection: 'column',
  },
});

export const Box = styled.div({}, ({ width }) => ({
  width: `${width}%`,
  margin: '0 0.5em',
  [`@media (max-width: ${minWidth}px)`]: {
    width: '100%',
    margin: 0,
  },
}));
