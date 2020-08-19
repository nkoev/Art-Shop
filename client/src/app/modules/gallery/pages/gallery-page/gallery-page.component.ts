import { Component, OnInit } from '@angular/core';
import { Item } from '../../../../models/item';
import { ItemsService } from '../../items.service';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.sass'],
})
export class GalleryPageComponent implements OnInit {
  panes: Item[] = [];
  sculptures: Item[] = [];
  collages: Item[] = [];

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.itemsService.getGalleryItems().then((items) => {
      this.panes = items.filter(({ type }) => type === 'Pane');
      this.sculptures = items.filter(({ type }) => type === 'Sculpture');
      this.collages = items.filter(({ type }) => type === 'Collage');
    });
  }
}
