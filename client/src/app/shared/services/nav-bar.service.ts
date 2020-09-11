import { Injectable } from '@angular/core';
import { Item } from 'src/app/models/item';

@Injectable({
  providedIn: 'root',
})
export class NavBarService {
  private _showNav = true;
  private _showEditItem = false;
  private _link = '';
  private _currentItem: Item = null;

  constructor() {}

  get showNav(): boolean {
    return this._showNav;
  }
  set showNav(show: boolean) {
    this._showNav = show;
  }

  get link(): string {
    return this._link;
  }
  set link(path: string) {
    this._link = path;
  }

  get showEditItem(): boolean {
    return this._showEditItem;
  }
  set showEditItem(show: boolean) {
    this._showEditItem = show;
  }

  get currentItem(): Item {
    return this._currentItem;
  }
  set currentItem(item: Item) {
    this._currentItem = item;
  }
}
