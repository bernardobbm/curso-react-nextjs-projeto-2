import { LogoDataTypes } from './logo-data-types';
import { MenuLinksType } from './map-menu-links-type';

export interface MapMenuProps {
  logo?: LogoDataTypes;
  logo_text?: string;
  logo_link?: string;
  menu_links?: MenuLinksType;
}
