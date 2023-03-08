import { render, screen } from '@testing-library/react';
import { it } from 'vitest';
import { Home } from '.';

it('should render Home', () => {
  const { debug } = render(<Home />);

  const headingContainer = screen.getByRole('heading', {
    name: 'Hello',
  }).parentElement;

  expect(headingContainer).toHaveStyleRule('background', '#ff6b99');

  debug();
});
