import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavBarService {
  private _visible = true;
  private _link = '';
  private _editItem = false;

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

  show() {
    this._visible = true;
  }

  hide() {
    this._visible = false;
  }

  setLink(path: string) {
    this._link = path;
  }

  showEditItem() {
    this._editItem = true;
  }

  hideEditItem() {
    this._editItem = false;
  }
}
