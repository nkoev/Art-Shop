export class Item {
  name: string;
  size: string;
  technics: string;
  imageUrls: string[];
  type: 'Pane' | 'Sculpture' | 'Collage';
  inGallery: boolean;
  inStore: boolean;
  materials: string[];
  price: number;
  id?: string;
}
