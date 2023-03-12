import styled, { css, DefaultTheme } from 'styled-components';
import { SectionBackgroundProps } from '.';

function containerBackgroudActivate(theme: DefaultTheme) {
  return css`
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
  `;
}

export const Container = styled.div<SectionBackgroundProps>`
  ${({ theme, background }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    min-height: 100vh;
    display: flex;
    align-items: center;

    ${background && containerBackgroudActivate(theme)}
  `}
`;
