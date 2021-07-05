import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavBarService } from 'src/app/shared/services/nav-bar.service';
import { Item } from 'src/app/models/item';
import { ItemsService } from '../../items.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.sass'],
})
export class EditItemComponent implements OnInit {
  item: Item;

  constructor(
    private navBarService: NavBarService,
    private itemsService: ItemsService,
    private activeModal: NgbActiveModal,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.item = this.navBarService.currentItem;
  }

  deleteItem() {
    this.itemsService.deleteItem(this.navBarService.currentItem.id).then(() => {
      this.dismiss();
      this.router.navigate([this.navBarService.link]);
    });
  }

  dismiss() {
    this.activeModal.dismiss();
  }
}
