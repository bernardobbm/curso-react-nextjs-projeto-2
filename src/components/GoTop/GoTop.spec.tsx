import { describe, expect, it } from 'vitest';

import { renderTheme } from '../../styles/render-theme';
import { GoTop } from '.';
import { screen } from '@testing-library/react';

describe('<GoTop />', () => {
  it('should render <GoTop />', () => {
    const { container } = renderTheme(<GoTop />);

    expect(screen.getByRole('link', { name: 'Go to top' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Go to top' })).toHaveAttribute(
      'href',
      '#',
    );
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        background-color: #0a1128;
        color: #fff;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        position: fixed;
        bottom: 1.25rem;
        right: 1.25rem;
        z-index: 6;
      }

      .c1 {
        display: inline-block;
        vertical-align: middle;
        overflow: hidden;
      }

      <div>
        <a
          aria-label="Go to top"
          class="c0"
          href="#"
          title="Go to top"
        >
          <svg
            aria-hidden="true"
            class="c1"
            fill="currentColor"
            focusable="false"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"
            />
          </svg>
        </a>
      </div>
    `);
  });
});
