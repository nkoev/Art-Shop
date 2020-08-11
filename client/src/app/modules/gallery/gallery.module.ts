import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryPageComponent } from './components/gallery-page/gallery-page.component';
import { ItemBoxComponent } from './components/item-box/item-box.component';
import { ItemPageComponent } from './components/item-page/item-page.component';

@NgModule({
  declarations: [GalleryPageComponent, ItemBoxComponent, ItemPageComponent],
  imports: [GalleryRoutingModule, CommonModule],
})
export class GalleryModule {}
