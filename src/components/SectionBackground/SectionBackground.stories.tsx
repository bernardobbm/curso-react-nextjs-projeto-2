import { Meta, StoryObj } from '@storybook/react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../styles/global-styles';
import { theme } from '../../styles/theme';
import { SectionBackground, SectionBackgroundProps } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>Section Background</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quia
          delectus deleniti porro eum! Commodi quam aperiam libero accusamus,
          eum mollitia voluptates aspernatur deserunt accusantium odio
          repudiandae non voluptatum autem!
        </p>
      </div>
    ),
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
} as Meta<SectionBackgroundProps>;

export const Default: StoryObj<SectionBackgroundProps> = {};
