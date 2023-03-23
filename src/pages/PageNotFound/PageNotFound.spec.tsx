import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PageNotFound } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<PageNotFound />', () => {
  it('should render PageNotFound with a Heading and TextComponent', () => {
    renderTheme(<PageNotFound />);

    const heading = screen.getByRole('heading', { name: 'Error 404' });
    const textComponent = screen.getByText(
      'A página que você está buscando não foi encontrada',
    );

    expect(heading).toBeInTheDocument();
    expect(textComponent).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<PageNotFound />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
