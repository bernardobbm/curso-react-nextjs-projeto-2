import styled, { css } from 'styled-components';
import { HeadingProps } from '.';

export const Title = styled.h1<HeadingProps>`
  ${({ theme, light }) => css`
    color: ${light ? theme.colors.white : theme.colors.primaryColor};
  `}
`;
