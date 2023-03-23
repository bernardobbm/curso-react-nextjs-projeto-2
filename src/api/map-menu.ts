import { MapMenuProps } from './interfaces/map-menu-props';
import { mapMenuLinks } from './map-menu-links';

export function mapMenu(menu: MapMenuProps = {}) {
  const {
    logo_text: text = '',
    logo_link: link = '',
    menu_links: links = [],
  } = menu;

  const imageSrc = menu?.logo?.data?.attributes?.url ?? '';

  return {
    text,
    link,
    imageSrc,
    links: mapMenuLinks(links),
  };
}
