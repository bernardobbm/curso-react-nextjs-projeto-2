import { describe, expect, it } from 'vitest';
import { GridContent } from '.';
import { renderTheme } from '../../styles/render-theme';

import mockArgs from './mock';

describe('<GridContent />', () => {
  it('should render grid content', () => {
    const { container } = renderTheme(
      <GridContent {...mockArgs} background={false} />,
    );

    expect(container).toMatchSnapshot();
  });
});
