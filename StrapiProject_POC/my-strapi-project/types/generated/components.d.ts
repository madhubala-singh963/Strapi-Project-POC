import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAward extends Struct.ComponentSchema {
  collectionName: 'components_shared_awards';
  info: {
    displayName: 'Award';
  };
  attributes: {
    logo: Schema.Attribute.Component<'shared.timeline', false>;
    title: Schema.Attribute.Blocks;
  };
}

export interface SharedBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_banners';
  info: {
    displayName: 'banner';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Component<'shared.link', false>;
    mobile_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.Blocks;
  };
}

export interface SharedBot extends Struct.ComponentSchema {
  collectionName: 'components_shared_bots';
  info: {
    displayName: 'BOT';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    description_middle: Schema.Attribute.Blocks;
    descriptioned: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.Blocks;
  };
}

export interface SharedCbiz extends Struct.ComponentSchema {
  collectionName: 'components_shared_cbizs';
  info: {
    displayName: 'CBIZ';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    descriptioned: Schema.Attribute.Blocks;
    imagee: Schema.Attribute.Component<'shared.imagee', true>;
    logo: Schema.Attribute.Component<'shared.logo', false>;
  };
}

export interface SharedCsr extends Struct.ComponentSchema {
  collectionName: 'components_shared_csrs';
  info: {
    displayName: 'CSR';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.Blocks;
  };
}

export interface SharedImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_images';
  info: {
    displayName: 'image';
  };
  attributes: {
    altText: Schema.Attribute.String;
    content: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SharedImagee extends Struct.ComponentSchema {
  collectionName: 'components_shared_imagees';
  info: {
    displayName: 'imagee';
  };
  attributes: {
    altText: Schema.Attribute.String;
    content: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    href: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface SharedLogo extends Struct.ComponentSchema {
  collectionName: 'components_shared_logos';
  info: {
    displayName: 'logo';
  };
  attributes: {
    image: Schema.Attribute.Component<'shared.image', false>;
    title: Schema.Attribute.Blocks;
  };
}

export interface SharedLogoss extends Struct.ComponentSchema {
  collectionName: 'components_shared_logosses';
  info: {
    displayName: 'Logoss';
  };
  attributes: {
    altText: Schema.Attribute.String;
    content: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    uploaded: Schema.Attribute.DateTime;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSapro extends Struct.ComponentSchema {
  collectionName: 'components_shared_sapros';
  info: {
    displayName: 'SAPRO';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    logo: Schema.Attribute.Component<'shared.seo', true>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    title: Schema.Attribute.Blocks;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {};
}

export interface SharedSolution extends Struct.ComponentSchema {
  collectionName: 'components_shared_solutions';
  info: {
    displayName: 'Solution';
  };
  attributes: {};
}

export interface SharedSolver extends Struct.ComponentSchema {
  collectionName: 'components_shared_solver_s';
  info: {
    displayName: 'solver ';
  };
  attributes: {
    altText: Schema.Attribute.String;
    content: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedTeamss extends Struct.ComponentSchema {
  collectionName: 'components_shared_teamsses';
  info: {
    displayName: 'Teamss';
  };
  attributes: {
    altText: Schema.Attribute.String;
    content: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SharedTimeline extends Struct.ComponentSchema {
  collectionName: 'components_shared_timelines';
  info: {
    displayName: 'Timeline';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    Image: Schema.Attribute.Component<'shared.solver', true>;
    name: Schema.Attribute.Blocks;
    position: Schema.Attribute.Blocks;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.award': SharedAward;
      'shared.banner': SharedBanner;
      'shared.bot': SharedBot;
      'shared.cbiz': SharedCbiz;
      'shared.csr': SharedCsr;
      'shared.image': SharedImage;
      'shared.imagee': SharedImagee;
      'shared.link': SharedLink;
      'shared.logo': SharedLogo;
      'shared.logoss': SharedLogoss;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.sapro': SharedSapro;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.solution': SharedSolution;
      'shared.solver': SharedSolver;
      'shared.teamss': SharedTeamss;
      'shared.timeline': SharedTimeline;
    }
  }
}
