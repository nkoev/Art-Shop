import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryPageComponent } from './components/gallery-page/gallery-page.component';

@NgModule({
  declarations: [GalleryPageComponent],
  imports: [GalleryRoutingModule, CommonModule],
})
export class GalleryModule {}
