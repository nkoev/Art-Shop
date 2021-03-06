import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  {
    path: 'gallery',
    loadChildren: () =>
      import('./modules/gallery/gallery.module').then((m) => m.GalleryModule),
  },
  {
    path: 'adv',
    loadChildren: () =>
      import('./modules/adv/adv.module').then((m) => m.AdvModule),
  },
  {
    path: 'store',
    loadChildren: () =>
      import('./modules/gallery/gallery.module').then((m) => m.GalleryModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
