import { Meta, StoryObj } from '@storybook/react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../styles/global-styles';
import { theme } from '../../styles/theme';
import { Footer, FooterProps } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    html: '<p><a href="#">Feito com ❤ por Bernamassa</a></p>',
  },
  parameters: {
    backgrounds: {
      values: [
        { name: 'light', value: theme.colors.white },
        { name: 'dark', value: theme.colors.primaryColor },
      ],
    },
  },
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {Story()}
        </ThemeProvider>
      );
    },
  ],
} as Meta<FooterProps>;

export const Default: StoryObj<FooterProps> = {};
