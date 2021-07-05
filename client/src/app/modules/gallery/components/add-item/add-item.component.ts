import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ValidationErrors,
} from '@angular/forms';
import { ItemsService } from '../../items.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.sass'],
})
export class AddItemComponent implements OnInit {
  types = ['Pane', 'Sculpture', 'Collage'];
  materials = ['Canava', 'Paper', 'Plastic', 'Some'];
  itemForm: FormGroup;
  itemImages: File[] = [];
  mainImage: File;

  constructor(
    private fb: FormBuilder,
    private itemsService: ItemsService,
    private activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.itemForm = this.fb.group({
      itemName: [null, [Validators.required]],
      type: ['Pane', [Validators.required]],
      size: [null, [Validators.required]],
      technics: [null, [Validators.required]],
      mainImage: null,
      images: null,
      toGallery: false,
      toStore: false,
      materials: null,
      price: null,
    });
  }

  async onSubmit(form: FormGroup): Promise<void> {
    if (form.valid) {
      const item = {
        name: form.controls.itemName.value,
        size: form.controls.size.value,
        technics: form.controls.technics.value,
        mainImageUrl: null,
        imageUrls: [],
        type: form.controls.type.value,
        inGallery: form.controls.toGallery.value,
        inStore: form.controls.toStore.value,
        materials: form.controls.materials.value,
        price: form.controls.price.value,
      };
      this.itemsService
        .addItem(item, this.mainImage, this.itemImages)
        .then(() => {
          this.dismiss();
        });
    } else {
      for (let key in form.controls) {
        let errors: ValidationErrors = form.get(key).errors;
        if (errors) {
          console.log(key, errors);
        }
      }
    }
  }

  dismiss() {
    this.activeModal.dismiss();
  }

  onImagesChange(event) {
    this.itemImages = event.target.files;
  }

  onMainImageChange(event) {
    this.mainImage = event.target.files[0];
  }
}
