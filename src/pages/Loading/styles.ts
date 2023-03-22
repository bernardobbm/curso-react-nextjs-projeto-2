import styled, { css, keyframes } from 'styled-components';

function rotate() {
  return keyframes`
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }

    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  `;
}

export const Container = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 10;
    background-color: ${theme.colors.primaryColor};

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-width: 0.31rem;
      border-color: transparent;
      border-style: solid;
      border-radius: 50%;
    }

    &::after {
      width: 3.75rem;
      height: 3.75rem;
      border-left: 0.31rem solid ${theme.colors.secondaryColor};
      border-top: 0.31rem solid ${theme.colors.secondaryColor};
      animation: ${rotate()} 0.6s linear infinite;
    }

    &::before {
      width: 1.25rem;
      height: 1.25rem;
      border-left: 0.31rem solid ${theme.colors.secondaryColor};
      border-top: 0.31rem solid ${theme.colors.secondaryColor};
      animation: ${rotate()} 1s linear reverse infinite;
    }
  `}
`;
