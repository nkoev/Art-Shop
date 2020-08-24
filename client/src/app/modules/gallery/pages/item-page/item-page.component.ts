import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemsService } from '../../items.service';
import { Item } from 'src/app/models/item';
import { ActivatedRoute } from '@angular/router';
import { NavBarService } from 'src/app/shared/services/nav-bar.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.sass'],
})
export class ItemPageComponent implements OnInit, OnDestroy {
  isLoggedIn: boolean;
  item: Item;
  mainImageUrl: string;
  allImageUrls: string[];

  constructor(
    private itemsService: ItemsService,
    private navBarService: NavBarService,
    private route: ActivatedRoute,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.auth.isLoggedIn$.subscribe((res) => {
      this.isLoggedIn = res;
    });
    this.navBarService.setLink('gallery');
    this.navBarService.showEditItem();
    this.itemsService.getItem(this.route.snapshot.params.id).then((item) => {
      this.item = item;
      this.mainImageUrl = item.mainImageUrl;
      this.allImageUrls = [item.mainImageUrl, ...item.imageUrls];
    });
  }

  ngOnDestroy(): void {
    this.navBarService.setLink('');
    this.navBarService.hideEditItem();
  }
}
