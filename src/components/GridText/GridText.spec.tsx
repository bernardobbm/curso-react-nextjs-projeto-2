import { describe, expect, it } from 'vitest';

import { GridText } from '.';
import mockArgs from './mock';
import { renderTheme } from '../../styles/render-theme';

describe('<GridText />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(<GridText {...mockArgs} />);

    expect(container).toMatchSnapshot();
  });
});
