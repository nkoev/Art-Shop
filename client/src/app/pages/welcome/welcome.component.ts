import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavBarService } from 'src/app/shared/services/nav-bar.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass'],
})
export class WelcomeComponent implements OnInit, OnDestroy {
  menu = false;
  store = false;

  constructor(private nav: NavBarService) {}

  ngOnInit(): void {
    this.nav.showNav = false;
  }
  ngOnDestroy(): void {
    this.nav.showNav = true;
  }

  showMenu() {
    this.menu = true;
  }

  showStore() {
    this.store = true;
  }
}
