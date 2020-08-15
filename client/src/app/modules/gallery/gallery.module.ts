import { NgModule } from '@angular/core';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryPageComponent } from './components/gallery-page/gallery-page.component';
import { ItemBoxComponent } from './components/item-box/item-box.component';
import { ItemPageComponent } from './components/item-page/item-page.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';

@NgModule({
  declarations: [
    GalleryPageComponent,
    ItemBoxComponent,
    ItemPageComponent,
    EditItemComponent,
  ],
  imports: [GalleryRoutingModule, SharedModule],
})
export class GalleryModule {}
