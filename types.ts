export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  year: string;
}

export interface SignConcept {
  slogan: string;
  visualStyle: string;
  colorPalette: string[];
  typographySuggestion: string;
}

export enum SectionId {
  HERO = 'hero',
  STORY = 'story',
  ORIGIN = 'origin',
  METHODOLOGY = 'methodology',
  GALLERY = 'gallery',
  WORKSHOP = 'workshop',
  STATUS = 'status',
  CONTACT = 'contact'
}