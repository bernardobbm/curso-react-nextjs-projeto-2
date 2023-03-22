import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primaryColor: '#0a1128',
    secondaryColor: '#dc143c',
    white: '#fff',
    mediumGray: '#ddd',
  },
  font: {
    family: {
      default: "'Open Sans', sans-serif",
      secondary: "'Montserrat', sans-serif",
    },
    size: {
      xsmall: '0.5rem',
      small: '1rem',
      medium: '1.5rem',
      large: '2rem',
      xlarge: '2.5rem',
      xxlarge: '3rem',
      huge: '3.5rem',
      xhuge: '4rem',
    },
  },
  media: {
    lteMedium: '(max-width: 768px)',
  },
  spacing: {
    xsmall: '0.5rem',
    small: '1rem',
    medium: '1.5rem',
    large: '2rem',
    xlarge: '2.5rem',
    xxlarge: '3rem',
    huge: '3.5rem',
    xhuge: '4rem',
  },
};
