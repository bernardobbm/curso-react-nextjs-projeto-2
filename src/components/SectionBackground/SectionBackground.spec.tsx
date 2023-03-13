import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { SectionBackground } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<SectionBackground />', () => {
  it('should render with dark background', () => {
    const { container } = renderTheme(
      <SectionBackground background>
        <h1>children</h1>
      </SectionBackground>,
    );

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render with light background', () => {
    const { container } = renderTheme(
      <SectionBackground>
        <h1>children</h1>
      </SectionBackground>,
    );

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
