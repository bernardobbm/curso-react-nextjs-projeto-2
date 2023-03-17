type PagesDataProps = Array<{
  footer_text?: string;
  slug?: string;
  title?: string;
  sections?: object[];
  menu?: object;
}>;

export function mapData(
  pagesData: PagesDataProps = [
    {
      footer_text: '',
      slug: '',
      title: '',
      sections: [],
      menu: {},
    },
  ],
) {
  return pagesData?.map((data) => {
    const { footer_text: footerHtml, slug, title, sections, menu } = data;

    return {
      footerHtml,
      slug,
      title,
      sections,
      menu,
    };
  });
}
