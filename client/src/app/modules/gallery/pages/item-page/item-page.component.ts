import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
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
  isInStore: boolean;
  item: Item;
  mainImageUrl: string;
  allImageUrls: string[];

  constructor(
    public navService: NavBarService,
    private itemsService: ItemsService,
    private route: ActivatedRoute,
    private auth: AuthService,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    this.isInStore = location.pathname.split('/')[1] === 'store';
    this.auth.isLoggedIn$.subscribe((res) => {
      this.isLoggedIn = res;
    });
    this.navService.link = 'gallery';
    this.navService.showEditItem = true;
    this.itemsService.getItem(this.route.snapshot.params.id).then((item) => {
      this.item = item;
      this.navService.currentItem = item;
      this.mainImageUrl = item.mainImageUrl;
      this.allImageUrls = [item.mainImageUrl, ...item.imageUrls];
    });
  }

  ngOnDestroy(): void {
    this.navService.link = '';
    this.navService.showEditItem = false;
  }

  updateMainImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
    this.el.nativeElement.querySelector('.ngxImageZoomFull').src = imageUrl;
  }
}
