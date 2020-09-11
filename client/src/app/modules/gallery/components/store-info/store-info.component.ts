import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-store-info',
  templateUrl: './store-info.component.html',
  styleUrls: ['./store-info.component.sass'],
})
export class StoreInfoComponent implements OnInit {
  @Input() item: Item;

  constructor() {}

  ngOnInit(): void {}
}
