import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 75rem;
    margin: 0 auto;
    padding: ${theme.spacing.large};
    width: 100%;
  `}
`;
