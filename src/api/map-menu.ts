import { MapMenuProps } from './interfaces/map-menu-props';
import { mapMenuLinks } from './map-menu-links';

export function mapMenu(menu: MapMenuProps = {}) {
  const {
    logo: { data: { attributes: { url: imageSrc = '' } = {} } = {} } = {},
    logo_text: text = '',
    logo_link: link = '',
    menu_links: links = [],
  } = menu;

  return {
    text,
    link,
    imageSrc,
    links: mapMenuLinks(links),
  };
}
