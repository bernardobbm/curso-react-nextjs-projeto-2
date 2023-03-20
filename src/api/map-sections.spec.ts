import { describe, expect, it } from 'vitest';
import {
  mapImageGrid,
  mapSectionContent,
  mapSections,
  mapSectionTwoColumns,
  mapTextGrid,
} from './map-sections';

import pagesFakeData from './data.json';
import pagesFakeDataWithoutTextGrid from './dataWithoutTextGrid.json';

describe('map-sections', () => {
  it('should render a predefined section if no data', () => {
    const data = mapSections();

    expect(data).toEqual([]);
  });

  it('should render sections with correct data', () => {
    const data = mapSections(pagesFakeData.data[0].attributes.sections);
    const dataWithoutTextGrid = mapSections(
      pagesFakeDataWithoutTextGrid.data[0].attributes.sections,
    );

    expect(data[0]?.component).toBe('section.sections-two-columns');
    expect(dataWithoutTextGrid[0]?.component).toBe(
      'section.sections-two-columns',
    );
  });

  it('should map section two columns and return a predefined object if have no data', () => {
    const data = mapSectionTwoColumns();

    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.imageUrl).toBe('');
    expect(data.text).toBe('');
    expect(data.title).toBe('');
  });

  it('should map section two columns with the correct values', () => {
    const data = mapSectionTwoColumns({
      __component: 'section.sections-two-columns',
      title: 'JANUARY BRINGS US FIREFOX 85',
      description: 'this is the description/text',
      image: {
        data: {
          attributes: {
            url: 'test_image.svg',
          },
        },
      },
      metadata: {
        section_id: 'home',
        background: true,
      },
    });

    expect(data.background).toBe(true);
    expect(data.component).toBe('section.sections-two-columns');
    expect(data.sectionId).toBe('home');
    expect(data.imageUrl).toBe('test_image.svg');
    expect(data.text).toBe('this is the description/text');
    expect(data.title).toBe('JANUARY BRINGS US FIREFOX 85');
  });

  it('should map section content and return a predefined object if have no data', () => {
    const section = mapSectionContent();

    expect(section.background).toBe(false);
    expect(section.component).toBe('');
    expect(section.sectionId).toBe('');
    expect(section.html).toBe('');
    expect(section.title).toBe('');
  });

  it('should map section content with the correct values', () => {
    const section = mapSectionContent({
      __component: 'section.section-content',
      title: 'this is the title',
      content: 'this is the content/html',
      metadata: {
        section_id: 'intro',
        background: false,
      },
    });

    expect(section.background).toBe(false);
    expect(section.component).toBe('section.section-content');
    expect(section.sectionId).toBe('intro');
    expect(section.html).toBe('this is the content/html');
    expect(section.title).toBe('this is the title');
  });

  it('should map grid text with the correct values', () => {
    const data = mapTextGrid({
      __component: 'section.section-grid',
      title: 'MY GRID',
      description: 'Uma breve descrição.\n\n',
      metadata: {
        section_id: 'grid-one',
        background: true,
      },
      text_grid: [
        {
          title: 'Teste 1',
          description: 'this is the description',
        },
        {
          title: 'Teste 2',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
        },
        {
          title: 'Teste 3',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.',
        },
      ],
      image_grid: [],
    });

    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-text-grid');
    expect(data.description).toBe('Uma breve descrição.\n\n');
    expect(data.title).toBe('MY GRID');
    expect(data.sectionId).toBe('grid-one');
    expect(data.grid[0].title).toBe('Teste 1');
    expect(data.grid[0].description).toBe('this is the description');
  });

  it('should map grid text and return a predefined object if have no data', () => {
    const data = mapTextGrid();

    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-text-grid');
    expect(data.description).toBe('');
    expect(data.title).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.grid[0].title).toBe('');
    expect(data.grid[0].description).toBe('');
  });

  it('should map grid image and return a predefined object if have no data', () => {
    const data = mapImageGrid();

    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-image-grid');
    expect(data.description).toBe('');
    expect(data.title).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.grid).toEqual([]);
  });

  it('should map grid image with the correct values', () => {
    const data = mapImageGrid({
      __component: 'section.section-grid',
      title: 'MY GRID',
      description: 'Uma breve descrição.\n\n',
      metadata: {
        section_id: 'grid-one',
        background: true,
      },
      image_grid: [
        {
          image: {
            data: [
              {
                attributes: {
                  alternativeText: 'alternative text',
                  url: 'image.svg',
                },
              },
            ],
          },
        },
      ],
    });

    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-image-grid');
    expect(data.description).toBe('Uma breve descrição.\n\n');
    expect(data.title).toBe('MY GRID');
    expect(data.sectionId).toBe('grid-one');
    expect(data.grid[0].altText).toBe('alternative text');
    expect(data.grid[0].imageSrc).toBe('image.svg');
  });
});
