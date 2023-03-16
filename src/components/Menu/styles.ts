import styled, { css } from 'styled-components';

import { Container as SectionContainerStyle } from '../SectionContainer/styles';
import { Title as HeadingTitleStyle } from '../Heading/styles';

interface StyleProps {
  visible: boolean;
}

function menuVisible() {
  return css`
    visibility: visible;
    opacity: 1;
  `;
}

export const Container = styled.div<StyleProps>`
  ${({ theme, visible }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    border-bottom: ${theme.colors.mediumGray};
    background-color: ${theme.colors.white};
    transition: all 0.3s ease-in-out;

    & ${SectionContainerStyle} {
      padding-top: 0;
      padding-bottom: 0;
    }

    & ${HeadingTitleStyle} {
      margin-top: 0;
      margin-bottom: 0;
    }

    @media ${theme.media.lteMedium} {
      height: 100vh;
      visibility: hidden;
      opacity: 0;

      ${visible && menuVisible()}

      & ${SectionContainerStyle} {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        height: 100vh;
        align-items: center;
        overflow-y: auto;
      }

      ${HeadingTitleStyle} {
        padding-bottom: ${theme.spacing.xxlarge};
        display: flex;
        justify-content: center;
      }
    }
  `}
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${theme.media.lteMedium} {
      display: block;
      text-align: center;
      padding: ${theme.spacing.xxlarge} 0;
    }
  `}
`;

export const Button = styled.button<StyleProps>`
  ${({ theme, visible }) => css`
    z-index: 6;
    position: fixed;
    top: 1.25rem;
    right: 1.25rem;
    width: 2rem;
    height: 2rem;
    background-color: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    cursor: pointer;
    border: none;
    display: none;
    pointer-events: ${visible ? 'none' : 'all'};

    @media ${theme.media.lteMedium} {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `}
`;
