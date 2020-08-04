import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavBarService {
  public visible = true;
  public current;

  constructor() {}
  show() {
    this.visible = true;
  }
  hide() {
    this.visible = false;
  }
  setCurrent(name: string) {
    this.current = name;
  }
}
