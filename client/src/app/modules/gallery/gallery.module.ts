import { NgModule } from '@angular/core';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';
import { ItemBoxComponent } from './components/item-box/item-box.component';
import { ItemPageComponent } from './pages/item-page/item-page.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';

@NgModule({
  declarations: [
    GalleryPageComponent,
    ItemBoxComponent,
    ItemPageComponent,
    EditItemComponent,
    AddItemComponent,
  ],
  imports: [GalleryRoutingModule, SharedModule],
})
export class GalleryModule {}
