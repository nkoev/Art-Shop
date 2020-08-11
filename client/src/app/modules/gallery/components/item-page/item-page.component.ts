import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemsService } from '../../items.service';
import { Item } from 'src/app/models/item';
import { ActivatedRoute } from '@angular/router';
import { NavBarService } from 'src/app/shared/services/nav-bar.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.sass'],
})
export class ItemPageComponent implements OnInit, OnDestroy {
  item: Item;

  constructor(
    private itemsService: ItemsService,
    private navBarService: NavBarService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.itemsService
      .getItem(this.route.snapshot.params.id)
      .then((item) => (this.item = item));
    this.navBarService.setLink('gallery');
  }

  ngOnDestroy(): void {
    this.navBarService.setLink('');
  }
}
