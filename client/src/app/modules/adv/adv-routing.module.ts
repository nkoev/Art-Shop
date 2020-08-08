import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvPageComponent } from './components/adv-page/adv-page.component';

const routes: Routes = [
  { path: '', component: AdvPageComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvRoutingModule {}
