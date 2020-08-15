import { Component, OnInit } from '@angular/core';
import { NavBarService } from 'src/app/shared/services/nav-bar.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass'],
})
export class AboutComponent implements OnInit {
  constructor(private nav: NavBarService) {}

  ngOnInit(): void {}
}
