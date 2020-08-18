import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.sass'],
})
export class AddItemComponent implements OnInit {
  itemForm: FormGroup;

  constructor(private fb: FormBuilder) {}

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
      toGallery: false,
      toStore: false,
    });
  }

  onSubmit(form: FormGroup) {}
}
