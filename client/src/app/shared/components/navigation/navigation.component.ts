import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../services/nav-bar.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass'],
})
export class NavigationComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(public nav: NavBarService, private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.isLoggedIn$.subscribe((res) => {
      this.isLoggedIn = res;
    });
  }

  logout(event) {
    event.stopPropagation();
    this.auth.logout();
  }
}
