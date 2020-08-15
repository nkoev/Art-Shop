import { NgModule } from '@angular/core';
import { StoreRoutingModule } from './store-routing.module';
import { StorePageComponent } from './components/store-page/store-page.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';

@NgModule({
  declarations: [StorePageComponent],
  imports: [SharedModule, StoreRoutingModule],
})
export class StoreModule {}
