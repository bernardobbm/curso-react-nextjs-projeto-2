import { MapMenuProps } from './interfaces/map-menu-props';
import { Sections } from './interfaces/section-types';
import { mapMenu } from './map-menu';
import { mapSections } from './map-sections';

export type PagesDataProps = {
  data: Array<{
    attributes: {
      footer_text?: string;
      slug?: string;
      title?: string;
      sections?: Sections[];
      menu?: MapMenuProps;
    };
  }>;
};

export function mapData({ data: pagesData = [] }: PagesDataProps) {
  return pagesData?.map(({ attributes: data }) => {
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
