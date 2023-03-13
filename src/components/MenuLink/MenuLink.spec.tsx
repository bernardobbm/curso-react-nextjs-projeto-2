import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MenuLink } from '.';

import { renderTheme } from '../../styles/render-theme';

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link="">link</MenuLink>);

    expect(screen.getByRole('link', { name: 'link' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  it('should render the link in a new tab', () => {
    renderTheme(
      <MenuLink link="" newTab>
        link
      </MenuLink>,
    );

    expect(screen.getByRole('link', { name: 'link' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });

  it('should match to snapshot', () => {
    const { container } = renderTheme(<MenuLink link="">link</MenuLink>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
