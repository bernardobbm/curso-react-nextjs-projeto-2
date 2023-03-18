import { MapMenuProps } from './interfaces/map-menu-props';
import { Sections } from './interfaces/section-types';
import { mapMenu } from './map-menu';
import { mapSections } from './map-sections';

type PagesDataProps = Array<{
  footer_text?: string;
  slug?: string;
  title?: string;
  sections?: Sections[];
  menu?: MapMenuProps;
}>;

export function mapData(pagesData: PagesDataProps = [{}]) {
  return pagesData?.map((data) => {
    const {
      footer_text: footerHtml = '',
      slug = '',
      title = '',
      sections = [],
      menu = {},
    } = data;

    return {
      footerHtml,
      slug,
      title,
      sections: mapSections(sections),
      menu: mapMenu(menu),
    };
  });
}
