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
    this.nav.hide();
  }
  ngOnDestroy(): void {
    this.nav.show();
  }

  showMenu() {
    this.menu = true;
  }

  showStore() {
    this.store = true;
  }
}
