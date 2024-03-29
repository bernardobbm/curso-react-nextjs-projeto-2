import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: block;
    text-decoration: none;
    font-size: ${theme.font.size.small};
    padding: ${theme.spacing.small};
    color: ${theme.colors.primaryColor};
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0.5rem;
      left: 50%;
      width: 0;
      height: 0.125rem;
      background: ${theme.colors.secondaryColor};
      transition: all 0.3s ease-in-out;
    }

    &:hover::after {
      left: 25%;
      width: 50%;
    }
  `}
`;
