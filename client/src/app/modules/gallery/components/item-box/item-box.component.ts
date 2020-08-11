import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-item-box',
  templateUrl: './item-box.component.html',
  styleUrls: ['./item-box.component.sass'],
})
export class ItemBoxComponent implements OnInit {
  @Input() item: Item;
  constructor() {}

  ngOnInit(): void {}
}
