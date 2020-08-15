import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [LoginPageComponent, LoginFormComponent],
  imports: [LoginRoutingModule, SharedModule],
})
export class LoginModule {}
