import { screen } from '@testing-library/react';
import { describe } from 'vitest';

import { NavLinks } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import mockLinks from './mock';

describe('<NavLinks />', () => {
  it('should render a nav with links', () => {
    renderTheme(<NavLinks links={mockLinks} />);

    expect(screen.getAllByRole('link')).toHaveLength(mockLinks.length);
  });

  it('should not render links in the nav', () => {
    renderTheme(<NavLinks />);

    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });

  it('should not render links in the nav', () => {
    renderTheme(<NavLinks links={mockLinks} />);

    expect(screen.getByText(/link 10/i).parentElement).toHaveStyleRule(
      'flex-flow',
      'column wrap',
      {
        media: theme.media.lteMedium,
      },
    );
  });

  it('should match to snapshot', () => {
    const { container } = renderTheme(<NavLinks links={mockLinks} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
