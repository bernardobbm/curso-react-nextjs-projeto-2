import {
  SectionContent,
  SectionGrid,
  Sections,
  SectionTwoColumns,
} from './interfaces/section-types';

export type MapSectionTwoColumnsType = ReturnType<typeof mapSectionTwoColumns>;
export type MapSectionContentType = ReturnType<typeof mapSectionContent>;
export type MapSectionImageGridType = ReturnType<typeof mapImageGrid>;
export type MapSectionTextGridType = ReturnType<typeof mapTextGrid>;

export function mapSections(sections: Sections[] = []) {
  return sections.map((section) => {
    if (section.__component === 'section.sections-two-columns') {
      return mapSectionTwoColumns(section as SectionTwoColumns);
    }

    if (section.__component === 'section.section-content') {
      return mapSectionContent(section as SectionContent);
    }

    if (section.__component === 'section.section-grid') {
      const { text_grid = [], image_grid = [] } = section as SectionGrid;

      if (text_grid.length > 0) {
        return mapTextGrid(section);
      }

      if (image_grid.length > 0) {
        return mapImageGrid(section);
      }
    }
  });
}

export function mapSectionTwoColumns(section: SectionTwoColumns = {}) {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: { data: { attributes: { url: imageSrc = '' } = {} } = {} } = {},
    metadata: { background = false, section_id: sectionId = '' } = {},
  } = section;

  return {
    component,
    title,
    text,
    imageSrc,
    background,
    sectionId,
  };
}

export function mapSectionContent(section: SectionContent = {}) {
  const {
    __component: component = '',
    title = '',
    metadata: { background = false, section_id: sectionId = '' } = {},
    content: html = '',
  } = section;

  return {
    component,
    title,
    html,
    background,
    sectionId,
  };
}

export function mapTextGrid(section: SectionGrid = {}) {
  const {
    title = '',
    description = '',
    text_grid: grid = [{ title: '', description: '' }],
    metadata: { background = false, section_id: sectionId = '' } = {},
  } = section;

  return {
    component: 'section.section-text-grid',
    title,
    description,
    background,
    sectionId,
    grid: grid.map((text) => {
      const { title, description } = text;

      return {
        title,
        description,
      };
    }),
  };
}

export function mapImageGrid(section: SectionGrid = {}) {
  const {
    title = '',
    description = '',
    image_grid: grid = [],
    metadata: { background = false, section_id: sectionId = '' } = {},
  } = section;

  return {
    component: 'section.section-image-grid',
    title,
    description,
    background,
    sectionId,
    grid: grid.map((image) => {
      const {
        image: {
          data: [
            {
              attributes: { alternativeText: altText = '', url: imageSrc = '' },
            },
          ],
        },
      } = image;

      return {
        altText,
        imageSrc,
      };
    }),
  };
}
