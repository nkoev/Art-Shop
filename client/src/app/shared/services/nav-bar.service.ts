import { Injectable } from '@angular/core';
import { Item } from 'src/app/models/item';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavBarService {
  private _showNav = true;
  private _showEditItem = false;
  private _link = '';
  private _currentItem: Item = null;

  constructor() {}

  get showNav() {
    return this._showNav;
  }
  set showNav(show: boolean) {
    this._showNav = show;
  }

  get link() {
    return this._link;
  }
  set link(path: string) {
    this._link = path;
  }

  get showEditItem() {
    return this._showEditItem;
  }
  set showEditItem(show: boolean) {
    this._showEditItem = show;
  }

  get currentItem() {
    return this._currentItem;
  }
  set currentItem(item: Item) {
    this._currentItem = item;
  }
}
