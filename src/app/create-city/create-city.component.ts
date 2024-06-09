import { Component, Input } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { Router, RouterLink } from '@angular/router';
import { City } from '../types';
import { CityService } from '../services/city.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-city',
  standalone: true,
  templateUrl: './create-city.component.html',
  styleUrl: './create-city.component.css',
  imports: [HeaderComponent, RouterLink, CommonModule, FormsModule]
})
export class CreateCityComponent {
  headerTitle: string = 'Создание города';
  cityName: string = '';
  cityDescription: string = '';
  cityImageUrl: string = '';

  constructor(private cityService: CityService, private router: Router) {}

  submitForm(): void {
    const newCity: City = {
      id: this.generateRandomIdFromDate(),
      name: this.cityName,
      description: this.cityDescription,
      image: this.cityImageUrl,
      favorite: false
    };
    this.cityService.addCity(newCity);
    this.clearForm();
    this.router.navigate(['']);
  }

  generateRandomIdFromDate(): number {
    const date = new Date();
    const milliseconds = date.getTime();
    const random = Math.floor(Math.random() * 10000);
    const id = parseInt(milliseconds.toString() + random.toString());
    return id;
  }

  clearForm(): void {
    this.cityName = '';
    this.cityDescription = '';
    this.cityImageUrl = '';
  }
}
