import { NgModule } from '@angular/core';

import { AdvRoutingModule } from './adv-routing.module';
import { AdvPageComponent } from './components/adv-page/adv-page.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';

@NgModule({
  declarations: [AdvPageComponent],
  imports: [SharedModule, AdvRoutingModule],
})
export class AdvModule {}
