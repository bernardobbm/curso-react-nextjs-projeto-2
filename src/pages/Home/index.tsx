import { useEffect, useState } from 'react';
import {
  MapSectionContentType,
  MapSectionTwoColumnsType,
} from '../../api/map-sections';

import { mapData } from '../../api/map-data';
import { GridContent } from '../../components/GridContent';
import { GridTwoColumns } from '../../components/GridTwoColumns';
import { Base } from '../Base';
import { Loading } from '../Loading';
import { PageNotFound } from '../PageNotFound';

type DataType = ReturnType<typeof mapData>[0];

export function Home() {
  const [data, setData] = useState<DataType | undefined>({} as DataType);

  useEffect(() => {
    async function loadDataFromApi() {
      try {
        const data = await fetch(
          'http://localhost:1337/api/pages?populate=deep',
        );
        const dataJson = await data.json();

        const pageData = mapData(dataJson)[0];

        setData(pageData);
      } catch (e) {
        setData(undefined);
      }
    }

    loadDataFromApi();
  }, []);

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
      })}
    </Base>
  );
}
