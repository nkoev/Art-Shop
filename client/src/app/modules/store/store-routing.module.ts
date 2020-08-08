import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StorePageComponent } from './components/store-page/store-page.component';

const routes: Routes = [
  { path: '', component: StorePageComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
