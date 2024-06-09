import { Routes } from '@angular/router';
import { CreateCityComponent } from './create-city/create-city.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'create-city', component: CreateCityComponent },
];