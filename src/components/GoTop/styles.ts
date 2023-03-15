import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;

    position: fixed;
    bottom: 1.25rem;
    right: 1.25rem;
    z-index: 6;
  `}
`;
