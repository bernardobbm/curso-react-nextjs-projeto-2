import styled, { css } from 'styled-components';

import { Title as HeadingTitleStyle } from '../Heading/styles';
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
    counter-reset: grid-counter;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacing.large};
  `}
`;

export const GridElement = styled.div`
  ${() => css`
    ${HeadingTitleStyle} {
      position: relative;
      left: 3.125rem;
    }

    ${HeadingTitleStyle}:before {
      counter-increment: grid-counter;
      content: counter(grid-counter);
      position: absolute;
      font-size: 4.5rem;
      top: -2rem;
      left: -3.8rem;
      transform: rotate(8deg);
    }
  `}
`;
