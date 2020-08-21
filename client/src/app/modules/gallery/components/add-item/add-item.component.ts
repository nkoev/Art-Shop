import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ItemsService } from '../../items.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
    private modalService: NgbModal,
    private activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.itemForm = this.fb.group({
      itemName: [null, [Validators.required]],
      type: [null, [Validators.required]],
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
      this.itemsService.addItem(item, this.mainImage, this.itemImages);
    } else {
      console.log('form is invalid');
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
