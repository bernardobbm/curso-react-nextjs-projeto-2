import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TextComponent } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<TextComponent />', () => {
  it('should render a text', () => {
    renderTheme(<TextComponent>children</TextComponent>);

    expect(screen.getByText('children')).toBeInTheDocument();
  });

  it('should match to snapshot', () => {
    const { container } = renderTheme(<TextComponent>children</TextComponent>);

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-size: 1.5rem;
      }

      <div
        class="c0"
      >
        children
      </div>
    `);
  });
});
