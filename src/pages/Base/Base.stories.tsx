import { Meta, StoryObj } from '@storybook/react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../styles/global-styles';
import { theme } from '../../styles/theme';
import { Base, BaseProps } from '.';
import { mockBase } from './mock';

export default {
  title: 'Pages/Base',
  component: Base,
  args: mockBase,
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
} as Meta<BaseProps>;

export const Default: StoryObj<BaseProps> = {};
