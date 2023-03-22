import { MenuLinksType } from './interfaces/map-menu-links-type';

export function mapMenuLinks(links: MenuLinksType = []) {
  return links.map((item) => {
    const {
      open_in_new_tab: newTab = false,
      link_text: children = '',
      url: link = '',
    } = item;

    return {
      newTab,
      children,
      link,
    };
  });
}
