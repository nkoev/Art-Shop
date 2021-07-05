import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavBarService } from 'src/app/shared/services/nav-bar.service';
import { Item } from 'src/app/models/item';
import { ItemsService } from '../../items.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.sass'],
})
export class EditItemComponent implements OnInit {
  item: Item;
  types = ['Pane', 'Sculpture', 'Collage'];
  materials = ['Canava', 'Paper', 'Plastic', 'Some'];
  itemForm: FormGroup;
  itemImages: File[] = [];
  mainImage: File;

  constructor(
    private fb: FormBuilder,
    private navBarService: NavBarService,
    private itemsService: ItemsService,
    private activeModal: NgbActiveModal,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.item = this.navBarService.currentItem;
    this.itemForm = this.fb.group({
      itemName: [this.item.name, [Validators.required]],
      type: [this.item.type, [Validators.required]],
      size: [this.item.size, [Validators.required]],
      technics: [this.item.technics, [Validators.required]],
      // mainImage: null, //not loaded
      // images: null, //not loaded
      toGallery: this.item.inGallery,
      toStore: this.item.inStore,
      materials: null,
      price: this.item.price,
    });
  }

  async onSubmit(form: FormGroup): Promise<void> {
    if (form.valid) {
      const item = {
        name: form.controls.itemName.value,
        size: form.controls.size.value,
        technics: form.controls.technics.value,
        mainImageUrl: this.item.mainImageUrl,
        imageUrls: this.item.imageUrls,
        type: form.controls.type.value,
        inGallery: form.controls.toGallery.value,
        inStore: form.controls.toStore.value,
        materials: form.controls.materials.value || this.item.materials,
        price: form.controls.price.value,
      };

      this.itemsService
        .updateItem(this.item.id, item, this.mainImage, this.itemImages)
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

  onImagesChange(event) {
    this.itemImages = event.target.files;
  }

  onMainImageChange(event) {
    this.mainImage = event.target.files[0];
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
