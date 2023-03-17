import { describe, expect, it } from 'vitest';
import { mapMenuLinks } from './map-menu-links';

describe('map-menu', () => {
  it('should return an empty array if no links', () => {
    const links = mapMenuLinks();

    expect(links).toEqual([]);
  });

  it('should return an empty array if no links', () => {
    const links = mapMenuLinks([
      {
        link_text: 'intro',
        url: '#intro',
        open_in_new_tab: false,
      },
      {
        link_text: 'grid-one',
        url: '#grid-one',
        open_in_new_tab: false,
      },
    ])[0];

    expect(links.newTab).toBe(false);
    expect(links.children).toBe('intro');
    expect(links.link).toBe('#intro');
  });
});
