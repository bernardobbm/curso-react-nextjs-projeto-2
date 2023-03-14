import { describe, expect, it } from 'vitest';

import { GridTwoColumns } from '.';
import { renderTheme } from '../../styles/render-theme';
import mockArgs from './mock';

describe('<GridTwoColumns />', () => {
  it('should render two column grid', () => {
    const { container } = renderTheme(
      <GridTwoColumns background={false} {...mockArgs} />,
    );

    expect(container).toMatchSnapshot();
  });
});
