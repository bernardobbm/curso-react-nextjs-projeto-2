import { describe, expect, it } from 'vitest';
import { mapData } from './map-data';

describe('map-data', () => {
  it('should map data even if not exist nothing', () => {
    const pagesData = mapData({ data: [{ attributes: {} }] })[0];

    expect(pagesData.footerHtml).toBe('');
    expect(pagesData.slug).toBe('');
    expect(pagesData.title).toBe('');
  });

  it('should map data if any', () => {
    const pagesData = mapData({
      data: [
        {
          attributes: {
            footer_text: '<p>Hey</p>',
            slug: 'slug',
            title: 'title',
          },
        },
      ],
    })[0];

    expect(pagesData.footerHtml).toBe('<p>Hey</p>');
    expect(pagesData.slug).toBe('slug');
    expect(pagesData.title).toBe('title');
  });
});
