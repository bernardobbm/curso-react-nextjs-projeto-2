import { BrowserRouter } from 'react-router-dom';
import { describe, it } from 'vitest';
import { Home } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Home />', () => {
  it('should render Home', () => {
    renderTheme(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
  });
});
