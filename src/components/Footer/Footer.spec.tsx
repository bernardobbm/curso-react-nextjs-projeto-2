import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render footer and match snapshot', () => {
    const { container } = renderTheme(<Footer html={'<h1>Olá</h1>'}></Footer>);

    expect(screen.getByRole('heading', { name: 'Olá' })).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      .c1 {
        max-width: 75rem;
        margin: 0 auto;
        padding: 2rem;
      }

      .c2 {
        font-size: 1.5rem;
      }

      .c0 {
        text-align: center;
      }

      .c0 a {
        color: inherit;
        -webkit-text-decoration: none;
        text-decoration: none;
        font-size: 1rem;
      }

      <div>
        <footer
          class="c0"
        >
          <div
            class="c1"
          >
            <div
              class="c2"
            >
              <h1>
                Olá
              </h1>
            </div>
          </div>
        </footer>
      </div>
    `);
  });
});
