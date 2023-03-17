import { describe, expect, it } from 'vitest';
import { mapMenu } from './map-menu';

describe('map-menu', () => {
  it('should return a predefined object if have no data', () => {
    const menu = mapMenu();

    expect(menu.text).toBe('');
    expect(menu.imageSrc).toBe('');
    expect(menu.link).toBe('');
  });

  it('should map menu to match keys and values required', () => {
    const menu = mapMenu({
      logo_link: '#home',
      logo_text: 'Logo',
      logo: {
        data: {
          attributes: {
            url: 'https://res.cloudinary.com/dousqioee/image/upload/v1677864041/landing_page_2_c6baa21725_db5ede9d2f.svg',
          },
        },
      },
      menu_links: [
        {
          id: 1,
          link_text: 'intro',
          url: '#intro',
          open_in_new_tab: false,
        },
        {
          id: 2,
          link_text: 'grid-one',
          url: '#grid-one',
          open_in_new_tab: false,
        },
      ],
    });

    expect(menu.text).toBe('Logo');
    expect(menu.imageSrc).toBe(
      'https://res.cloudinary.com/dousqioee/image/upload/v1677864041/landing_page_2_c6baa21725_db5ede9d2f.svg',
    );
    expect(menu.link).toBe('#home');
    expect(menu.links[0].newTab).toBe(false);
    expect(menu.links[0].children).toBe('intro');
    expect(menu.links[0].link).toBe('#intro');
  });
});
