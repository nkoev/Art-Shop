import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { StoryComponent } from './pages/story/story.component';

@NgModule({
  declarations: [AppComponent, WelcomeComponent, NavigationComponent, StoryComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
