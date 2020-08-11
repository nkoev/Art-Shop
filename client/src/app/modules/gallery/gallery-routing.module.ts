import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryPageComponent } from './components/gallery-page/gallery-page.component';
import { ItemPageComponent } from './components/item-page/item-page.component';

const routes: Routes = [
  { path: '', component: GalleryPageComponent, pathMatch: 'full' },
  { path: 'item/:id', component: ItemPageComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalleryRoutingModule {}
