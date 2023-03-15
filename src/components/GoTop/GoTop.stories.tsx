import { Meta, StoryObj } from '@storybook/react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../styles/global-styles';
import { theme } from '../../styles/theme';
import { GoTop } from '.';

export default {
  title: 'GoTop',
  component: GoTop,
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
          <div style={{ height: '400vh' }}>
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>
              consectetur adipisicing elit. Iste nihil laboriosam maiores. Rerum
              aspernatur voluptatem voluptatibus tempore consequuntur sequi ex
              fugiat incidunt, optio dolorem voluptatum necessitatibus in
              perspiciatis quaerat maxime!
            </p>

            <h1>Lorem ipsum dolor sit amet</h1>
            <p>
              consectetur adipisicing elit. Iste nihil laboriosam maiores. Rerum
              aspernatur voluptatem voluptatibus tempore consequuntur sequi ex
              fugiat incidunt, optio dolorem voluptatum necessitatibus in
              perspiciatis quaerat maxime!
            </p>

            <h1>Lorem ipsum dolor sit amet</h1>
            <p>
              consectetur adipisicing elit. Iste nihil laboriosam maiores. Rerum
              aspernatur voluptatem voluptatibus tempore consequuntur sequi ex
              fugiat incidunt, optio dolorem voluptatum necessitatibus in
              perspiciatis quaerat maxime!
            </p>

            <h1>Lorem ipsum dolor sit amet</h1>
            <p>
              consectetur adipisicing elit. Iste nihil laboriosam maiores. Rerum
              aspernatur voluptatem voluptatibus tempore consequuntur sequi ex
              fugiat incidunt, optio dolorem voluptatum necessitatibus in
              perspiciatis quaerat maxime!
            </p>

            <h1>Lorem ipsum dolor sit amet</h1>
            <p>
              consectetur adipisicing elit. Iste nihil laboriosam maiores. Rerum
              aspernatur voluptatem voluptatibus tempore consequuntur sequi ex
              fugiat incidunt, optio dolorem voluptatum necessitatibus in
              perspiciatis quaerat maxime!
            </p>

            {Story()}
          </div>
        </ThemeProvider>
      );
    },
  ],
} as Meta;

export const Default: StoryObj = {};
