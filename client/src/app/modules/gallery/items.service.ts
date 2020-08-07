import { Injectable } from '@angular/core';
import { Item } from 'src/app/models/item';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor() {}

  getPanes(): Promise<Item[]> {
    return Promise.resolve([
      { name: 'Great Picture', image: '../../../assets/images/test1.jpg' },
      { name: 'Another Picture', image: '../../../assets/images/test1.jpg' },
      { name: 'Awesome Picture', image: '../../../assets/images/test1.jpg' },
      { name: 'Great Picture', image: '../../../assets/images/test1.jpg' },
      { name: 'Another Picture', image: '../../../assets/images/test1.jpg' },
      { name: 'Awesome Picture', image: '../../../assets/images/test1.jpg' },
      { name: 'Great Picture', image: '../../../assets/images/test1.jpg' },
      { name: 'Another Picture', image: '../../../assets/images/test1.jpg' },
      { name: 'Awesome Picture', image: '../../../assets/images/test1.jpg' },
    ]);
  }

  getSculptures(): Promise<Item[]> {
    return Promise.resolve([
      { name: 'Great Sculpture', image: '../../../assets/images/test1.jpg' },
      { name: 'Another Sculpture', image: '../../../assets/images/test1.jpg' },
      { name: 'Awesome Sculpture', image: '../../../assets/images/test1.jpg' },
    ]);
  }

  getCollages(): Promise<Item[]> {
    return Promise.resolve([
      { name: 'Great Collage', image: '../../../assets/images/test1.jpg' },
      { name: 'Another Collage', image: '../../../assets/images/test1.jpg' },
      { name: 'Awesome Collage', image: '../../../assets/images/test1.jpg' },
    ]);
  }
}
