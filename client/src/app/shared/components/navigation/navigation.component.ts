import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../services/nav-bar.service';
import { AuthService } from '../../services/auth.service';
import { ModalService } from '../../services/modal.service';
import { AddItemComponent } from '../add-item/add-item.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass'],
})
export class NavigationComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(
    public nav: NavBarService,
    private auth: AuthService,
    private modalService: NgbModal,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.auth.isLoggedIn$.subscribe((res) => {
      this.isLoggedIn = res;
    });
  }

  logout(event) {
    event.stopPropagation();
    this.auth.logout();
  }

  openAddDialog(event) {
    event.stopPropagation();
    this.modalService.open(AddItemComponent);
  }
}
