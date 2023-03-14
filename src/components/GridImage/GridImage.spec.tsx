import { describe, expect, it } from 'vitest';

import { GridImage } from '.';
import mockArgs from './mock';
import { renderTheme } from '../../styles/render-theme';

describe('<GridImage />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(<GridImage {...mockArgs} />);

    expect(container).toMatchSnapshot();
  });
});
