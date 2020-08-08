import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvRoutingModule } from './adv-routing.module';
import { AdvPageComponent } from './components/adv-page/adv-page.component';


@NgModule({
  declarations: [AdvPageComponent],
  imports: [
    CommonModule,
    AdvRoutingModule
  ]
})
export class AdvModule { }
