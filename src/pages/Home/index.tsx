import { useEffect, useState } from 'react';
import qs from 'qs';
import { useLocation } from 'react-router-dom';
import {
  MapSectionContentType,
  MapSectionImageGridType,
  MapSectionTextGridType,
  MapSectionTwoColumnsType,
} from '../../api/map-sections';

import { mapData } from '../../api/map-data';
import { GridContent } from '../../components/GridContent';
import { GridTwoColumns } from '../../components/GridTwoColumns';
import { Base } from '../Base';
import { Loading } from '../Loading';
import { PageNotFound } from '../PageNotFound';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';

type DataType = ReturnType<typeof mapData>[0];

export function Home() {
  const [data, setData] = useState<DataType | undefined>({} as DataType);
  const location = useLocation();

  useEffect(() => {
    async function loadDataFromApi() {
      const pathName = location.pathname.replace(/[^a-z0-9-_]/gi, '');
      const slug = pathName ? pathName : 'landing-page';

      const query = qs.stringify(
        {
          filters: { slug: slug },
          populate: [
            'menu',
            'menu.logo',
            'menu.menu_link',
            'sections',
            'sections.image',
            'sections.image_grid',
            'sections.image_grid.image',
            'sections.text_grid',
            'sections.metadata',
          ],
        },
        { encodeValuesOnly: true },
      );

      try {
        const data = await fetch(`http://localhost:1337/api/pages?${query}`);
        const dataJson = await data.json();

        const pageData = mapData(dataJson)[0];

        setData(pageData);
      } catch (e) {
        setData(undefined);
      }
    }

    loadDataFromApi();
  }, [location]);

  if (data && !data?.slug) return <Loading />;

  if (data === undefined) return <PageNotFound />;

  const {
    menu: { link, links, text, imageSrc },
    sections,
    footerHtml,
    slug,
  } = data;

  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ link, text, imageSrc }}
    >
      {sections.map((section, index) => {
        if (!section) return <PageNotFound key="Error404" />;

        const { component } = section;
        const componentKey = `${slug}-${index}`;

        if (component === 'section.sections-two-columns') {
          return (
            <GridTwoColumns
              key={componentKey}
              {...(section as MapSectionTwoColumnsType)}
            />
          );
        }

        if (component === 'section.section-content') {
          return (
            <GridContent
              key={componentKey}
              {...(section as MapSectionContentType)}
            />
          );
        }

        if (component === 'section.section-text-grid') {
          return (
            <GridText
              key={componentKey}
              {...(section as MapSectionTextGridType)}
            />
          );
        }

        if (component === 'section.section-image-grid') {
          return (
            <GridImage
              key={componentKey}
              {...(section as MapSectionImageGridType)}
            />
          );
        }
      })}
    </Base>
  );
}
