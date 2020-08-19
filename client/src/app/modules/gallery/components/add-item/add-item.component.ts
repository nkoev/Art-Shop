import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ItemsService } from '../../items.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.sass'],
})
export class AddItemComponent implements OnInit {
  types = ['Pane', 'Sculpture', 'Collage'];
  materials = ['Canava', 'Paper', 'Plastic', 'Some'];
  itemForm: FormGroup;
  itemImages = [];

  constructor(private fb: FormBuilder, private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.itemForm = this.fb.group({
      itemName: [
        null,
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z][a-zA-Z\\- ]*'),
        ],
      ],
      type: [null, [Validators.required]],
      size: [
        null,
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z][a-zA-Z\\- ]*'),
        ],
      ],
      technics: [
        null,
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z][a-zA-Z\\- ]*'),
        ],
      ],
      images: null,
      toGallery: false,
      toStore: false,
      materials: null,
      price: null,
    });
  }

  async onSubmit(form: FormGroup): Promise<void> {
    const item = {
      name: form.controls.itemName.value,
      size: form.controls.size.value,
      technics: form.controls.technics.value,
      imageUrls: [],
      type: form.controls.type.value,
      inGallery: form.controls.toGallery.value,
      inStore: form.controls.toStore.value,
      materials: form.controls.materials.value,
      price: form.controls.price.value,
    };
    this.itemsService.addItem(item, this.itemImages);
  }

  onFileChange(event) {
    this.itemImages = event.target.files;
  }
}
