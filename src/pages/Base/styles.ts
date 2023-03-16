import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    padding-top: 3.375rem;

    @media ${theme.media.lteMedium} {
      padding-top: 0;
    }
  `}
`;
