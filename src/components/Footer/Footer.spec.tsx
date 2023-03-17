import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';

import { renderTheme } from '../../styles/render-theme';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render footer and match snapshot', () => {
    const { container } = renderTheme(
      <Footer footerHtml={'<h1>Olá</h1>'}></Footer>,
    );

    expect(screen.getByRole('heading', { name: 'Olá' })).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      .c2 {
        max-width: 75rem;
        margin: 0 auto;
        padding: 2rem;
      }

      .c4 {
        font-size: 1.5rem;
      }

      .c0 {
        text-align: center;
        border-top: 0.0625rem solid #ddd;
      }

      .c0 a {
        color: inherit;
        -webkit-text-decoration: none;
        text-decoration: none;
      }

      .c0 .c3 {
        font-size: 1rem;
      }

      .c0 .c1 {
        padding-top: 0;
        padding-bottom: 0;
      }

      <div>
        <footer
          class="c0"
        >
          <div
            class="c1 c2"
          >
            <div
              class="c3 c4"
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
