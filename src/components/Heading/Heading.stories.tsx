import { Meta, StoryObj } from '@storybook/react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../styles/globalStyles';
import { theme } from '../../styles/theme';
import { Heading, HeadingProps } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'não sei ainda',
  },
  parameters: {
    backgrounds: {
      values: [
        {
          name: 'light',
          value: theme.colors.white,
        },
        {
          name: 'dark',
          value: theme.colors.primaryColor,
        },
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

export const Template: StoryObj<HeadingProps> = {};
