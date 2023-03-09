import { Meta, StoryObj } from '@storybook/react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../styles/global-styles';
import { theme } from '../../styles/theme';
import { Heading, HeadingProps } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'o texto está escuro',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
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
} as Meta<HeadingProps>;

export const Light: StoryObj<HeadingProps> = {
  args: {
    colorDark: true,
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};

export const Dark: StoryObj<HeadingProps> = {
  args: {
    children: 'o texto está claro',
    colorDark: false,
  },
};
