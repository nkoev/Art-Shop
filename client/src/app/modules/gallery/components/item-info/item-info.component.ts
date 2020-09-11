import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.sass'],
})
export class ItemInfoComponent implements OnInit {
  @Input() item: Item;

  constructor() {}

  ngOnInit(): void {}
}
