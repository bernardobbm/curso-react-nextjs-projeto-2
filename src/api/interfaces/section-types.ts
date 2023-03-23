interface SectionDefault {
  __component?: string;
  title?: string;
  description?: string;
  metadata?: {
    section_id?: string;
    background?: boolean;
  };
}

export interface SectionTwoColumns extends SectionDefault {
  image?: {
    data: {
      attributes: {
        url?: string;
      };
    };
  };
}

export interface SectionContent extends SectionDefault {
  content?: string;
}

export interface SectionGrid extends SectionDefault {
  text_grid?: Array<{
    id?: number;
    title?: string;
    description?: string;
  }>;
  image_grid?: Array<{
    image: {
      data: Array<{
        attributes: {
          alternativeText?: string;
          url?: string;
        };
      }>;
    };
  }>;
}

export type Sections = SectionTwoColumns | SectionContent | SectionGrid;
