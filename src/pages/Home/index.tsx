import { useEffect, useState } from 'react';
import { mapData } from '../../api/map-data';
import { Base } from '../Base';
import { mockBase } from '../Base/mock';
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

  return <Base {...mockBase} />;
}
