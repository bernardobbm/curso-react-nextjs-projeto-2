import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { SectionContainer } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<SectionContainer />', () => {
  it('should render content', () => {
    const { container } = renderTheme(
      <SectionContainer>
        <h1>children</h1>
      </SectionContainer>,
    );

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
