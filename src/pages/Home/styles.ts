import styled, { css } from 'styled-components';

interface WrapperProps {
  background: string;
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ background }) => css`
    background: ${background};
  `}
`;
