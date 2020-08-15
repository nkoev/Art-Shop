import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddItemComponent } from '../components/add-item/add-item.component';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavigationComponent, AddItemComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NavigationComponent,
    AddItemComponent,
  ],
})
export class SharedModule {}
