import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavBarService {
  public visible = true;
  public link = '';

  constructor() {}
  show() {
    this.visible = true;
  }
  hide() {
    this.visible = false;
  }
  setLink(path: string) {
    this.link = path;
  }
}
