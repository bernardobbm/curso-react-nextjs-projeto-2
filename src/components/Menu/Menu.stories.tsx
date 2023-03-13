import { Meta, StoryObj } from '@storybook/react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../styles/global-styles';
import { theme } from '../../styles/theme';
import { Menu, MenuProps } from '.';
import mockLinks from '../NavLinks/mock';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: mockLinks,
    logoData: {
      text: 'logo',
      link: '#target',
      imageSrc: '',
    },
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
} as Meta<MenuProps>;

export const Default: StoryObj<MenuProps> = {};
