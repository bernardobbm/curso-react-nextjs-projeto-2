import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.font.family.default};
  }

  h1 {
    font-family: ${({ theme }) => theme.font.family.secondary};
  }
`;
