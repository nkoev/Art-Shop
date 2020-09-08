import { Injectable } from '@angular/core';
import { Item } from 'src/app/models/item';

@Injectable({
  providedIn: 'root',
})
export class NavBarService {
  private _visible = true;
  private _link = '';
  private _editItem = false;
  private _currentItem: Item = null;

  constructor() {}

  get visible() {
    return this._visible;
  }
  get link() {
    return this._link;
  }
  get editItem() {
    return this._editItem;
  }
  get currentItem() {
    return this._currentItem;
  }

  show() {
    this._visible = true;
  }

  hide() {
    this._visible = false;
  }

  setLink(path: string) {
    this._link = path;
  }

  setCurrentItem(item: Item) {
    this._currentItem = item;
  }

  showEditItem() {
    this._editItem = true;
  }

  hideEditItem() {
    this._editItem = false;
  }
}
