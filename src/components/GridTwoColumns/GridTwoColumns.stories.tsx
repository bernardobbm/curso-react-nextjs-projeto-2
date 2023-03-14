import { Meta, StoryObj } from '@storybook/react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../styles/global-styles';
import { theme } from '../../styles/theme';
import { GridTwoColumns, GridTwoColumnsProps } from '.';
import mockArgs from './mock';

export default {
  title: 'GridTwoColumns',
  component: GridTwoColumns,
  args: mockArgs,
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
} as Meta<GridTwoColumnsProps>;

export const Default: StoryObj<GridTwoColumnsProps> = {};
