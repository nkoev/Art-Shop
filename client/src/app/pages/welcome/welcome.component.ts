import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavBarService } from 'src/app/shared/services/nav-bar.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass'],
})
export class WelcomeComponent implements OnInit, OnDestroy {
  constructor(private nav: NavBarService) {}

  ngOnInit(): void {
    this.nav.hide();
  }
  ngOnDestroy(): void {
    this.nav.show();
  }
}
