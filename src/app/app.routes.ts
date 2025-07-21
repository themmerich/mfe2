import { Routes } from '@angular/router';
import {FlightsComponent} from './flights/flights.component';
import {ProfileComponent} from './profile/profile.component';

export const routes: Routes = [
  {
    path: 'mfe2',
    redirectTo: 'mfe2/flights',
    pathMatch: 'full'
  },
  {
    path: 'mfe2/flights',
    component: FlightsComponent
  },
  {
    path: 'mfe2/profile',
    component: ProfileComponent
  }
];
