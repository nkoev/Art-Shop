import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavBarService } from 'src/app/shared/services/nav-bar.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass'],
})
export class LoginPageComponent implements OnInit, OnDestroy {
  constructor(private navService: NavBarService) {}

  ngOnInit(): void {
    this.navService.hide();
  }

  ngOnDestroy(): void {
    this.navService.show();
  }
}
