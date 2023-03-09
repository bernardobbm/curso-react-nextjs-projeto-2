import styled, { css, DefaultTheme } from 'styled-components';
import { HeadingProps } from '.';

const titleSize = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size.medium};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size.large};
  `,
  big: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size.xlarge};
  `,

  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.size.xhuge};
  `,
};

const titleCase = (uppercase: boolean) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1.attrs<HeadingProps>(
  ({ as }) => as,
)<HeadingProps>`
  ${({ theme, colorDark, size, uppercase }) => css`
    color: ${colorDark ? theme.colors.primaryColor : theme.colors.white};
    ${titleSize[size](theme)}
    ${titleCase(uppercase)}
  `}
`;
