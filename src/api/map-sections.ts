import {
  SectionContent,
  SectionGrid,
  Sections,
  SectionTwoColumns,
} from './interfaces/section-types';

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

    return section;
  });
}

export function mapSectionTwoColumns(section: SectionTwoColumns = {}) {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: { data: { attributes: { url: imageUrl = '' } = {} } = {} } = {},
    metadata: { background = false, section_id: sectionId = '' } = {},
  } = section;

  return {
    component,
    title,
    text,
    imageUrl,
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
    __component: component = '',
    title = '',
    description = '',
    text_grid: grid = [{ title: '', description: '' }],
    metadata: { background = false, section_id: sectionId = '' } = {},
  } = section;

  return {
    component,
    title,
    description,
    grid,
    background,
    sectionId,
  };
}

export function mapImageGrid(section: SectionGrid = {}) {
  return section;
}
