import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryColor: string;
      secondaryBg: string;
      white: string;
    };
    font: {
      family: {
        default: string;
        secondary: string;
      };
    };
  }
}
