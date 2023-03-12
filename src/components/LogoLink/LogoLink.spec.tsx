import { screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { LogoLink } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<LogoLink />', () => {
  it('shoudl render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Hello World" />);

    expect(screen.getByRole('heading', { name: /hello world/i }))
      .toBeInTheDocument;

    expect(screen.getByRole('link', { name: 'Hello World' })).toHaveAttribute(
      'href',
      '#target',
    );
  });

  it('shoudl render image logo', () => {
    renderTheme(
      <LogoLink link="#target" text="Hello World" imageSrc="image.jpg" />,
    );

    expect(screen.getByAltText('Hello World')).toHaveAttribute(
      'src',
      'image.jpg',
    );
  });

  it('shoudl match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="Hello World" imageSrc="image.jpg" />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
