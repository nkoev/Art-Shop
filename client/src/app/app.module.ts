import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AboutComponent } from './pages/about/about.component';
import { SharedModule } from './shared/modules/shared.module';
import { FirestoreModule } from './shared/modules/firestore.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, WelcomeComponent, AboutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FirestoreModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
