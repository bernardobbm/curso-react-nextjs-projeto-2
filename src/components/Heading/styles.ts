import styled, { css, DefaultTheme } from 'styled-components';
import { HeadingSizes, HeadingsType } from '.';

export interface HeadingTitleProps {
  colorDark: boolean;
  size: HeadingSizes;
  as: HeadingsType;
  uppercase: boolean;
}

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
    ${mediaFont(theme)}
  `,
};

const mediaFont = (theme: DefaultTheme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.size.xlarge};
  }
`;

const titleCase = (uppercase: boolean) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1.attrs<HeadingTitleProps>(
  ({ as }) => as,
)<HeadingTitleProps>`
  ${({ theme, colorDark, size, uppercase }) => css`
    color: ${colorDark ? theme.colors.primaryColor : theme.colors.white};
    ${titleSize[size](theme)}
    ${titleCase(uppercase)}
  `}
`;
