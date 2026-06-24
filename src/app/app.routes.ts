import { Routes } from '@angular/router';
import { HomePageComponent } from './country/components/home-page/home-page';

export const routes: Routes = [

  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'country',
    loadChildren: () => import('./country/country.routes')
  },
  {
    path:"**",
    redirectTo: '',
  }
];
