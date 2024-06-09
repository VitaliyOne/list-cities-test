import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { City } from '../types';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ListCitiesComponent } from "../list-cities/list-cities.component";
import { TileCitiesComponent } from "../tile-cities/tile-cities.component";
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  imports: [
    HeaderComponent,
    FooterComponent,
    CommonModule,
    RouterLink,
    ListCitiesComponent,
    TileCitiesComponent
  ]
})
export class MainComponent {
  headerTitle: string = 'Cписок городов';
  isListViewActive: boolean = true;
  isTileViewActive: boolean = false;
  isListView: boolean = true;

  cities: City[] = [];

  constructor(private cityService: CityService) {
    this.cities = this.cityService.cities;
  }

  sortCitiesByFavorite(): void {
    this.cities = this.cityService.sortCitiesByFavorite(this.cities);
  }

  onFavoriteChanged(cityId: number): void {
    this.cityService.toggleFavorite(cityId);
    this.sortCitiesByFavorite();
  }

  toggleView(view: string) {
    if (view === 'list') {
      this.isListViewActive = true;
      this.isTileViewActive = false;
    } else if (view === 'tile') {
      this.isListViewActive = false;
      this.isTileViewActive = true;
    }
  };
}
