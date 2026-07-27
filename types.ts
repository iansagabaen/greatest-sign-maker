export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  year: string;
}

export enum SectionId {
  HERO = 'hero',
  STORY = 'story',
  ORIGIN = 'origin',
  METHODOLOGY = 'methodology',
  GALLERY = 'gallery',
  STATUS = 'status',
  PRESS = 'press',
  CONTACT = 'contact'
}