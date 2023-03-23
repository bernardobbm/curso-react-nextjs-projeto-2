import styled, { css } from 'styled-components';

import { Container as TextComponentContainerStyle } from '../TextComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    ${TextComponentContainerStyle} {
      margin-bottom: ${theme.spacing.xhuge};
    }
  `}
`;

export const GridContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacing.large};

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const GridElement = styled.div`
  ${() => css`
    overflow: hidden;
  `}
`;

export const Image = styled.img`
  ${() => css`
    width: 100%;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.2) rotate(10deg);
    }
  `}
`;
