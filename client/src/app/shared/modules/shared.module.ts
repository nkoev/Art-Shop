import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [NavigationComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, NgbModule],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    NavigationComponent,
  ],
})
export class SharedModule {}
