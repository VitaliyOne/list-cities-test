import { Component, Input } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { RouterLink } from '@angular/router';
import { City } from '../types';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-create-city',
  standalone: true,
  templateUrl: './create-city.component.html',
  styleUrl: './create-city.component.css',
  imports: [HeaderComponent, RouterLink]
})
export class CreateCityComponent {
  headerTitle: string = 'Создание города';
  cities: City[] = [];
  constructor(private cityService: CityService) {
    this.cities = this.cityService.cities;
  }
}
