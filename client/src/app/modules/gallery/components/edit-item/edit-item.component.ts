import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavBarService } from 'src/app/shared/services/nav-bar.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.sass'],
})
export class EditItemComponent implements OnInit {
  item: Item;

  constructor(private navBarService: NavBarService) {}

  ngOnInit(): void {
    this.item = this.navBarService.currentItem;
  }
}
