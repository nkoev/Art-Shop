import { Injectable } from '@angular/core';
import { Item } from 'src/app/models/item';
import { items } from 'src/app/db';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor() {}

  getItems(): Promise<Item[]> {
    return Promise.resolve(items);
  }

  getItem(id: number): Promise<Item> {
    return Promise.resolve(items[id]);
  }
}
