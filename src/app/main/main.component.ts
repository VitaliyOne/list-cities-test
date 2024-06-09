import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { City } from '../types';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ListCitiesComponent } from "../list-cities/list-cities.component";
import { TileCitiesComponent } from "../tile-cities/tile-cities.component";

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
  cities: City[] = [
    { id: 1, image: 'https://screenshots.enkod.tech/ilya_novikovG6KIVEp3v160xCMY.png', name: 'Москва', description: 'Столица России, город федерального значения', favorite: false },
    { id: 2, image: 'https://screenshots.enkod.tech/ilya_novikovW7s6gLwAGDjaJbNL.png', name: 'Санкт-Петербург', description: 'Второй по численности населения город России', favorite: false },
    { id: 3, image: 'https://screenshots.enkod.tech/ilya_novikovHyQpb3vrjFvTfzJJ.png', name: 'Новосибирск', description: 'Третий по численности населения город России', favorite: false },
    { id: 4, image: 'https://screenshots.enkod.tech/ilya_novikovvUvY8ocQ8yIQg6Gi.png', name: 'Екатеринбург', description: 'Город-миллионник в России. Тоже красивый город', favorite: false },
    { id: 5, image: 'https://screenshots.enkod.tech/ilya_novikovHWEuBOtzexaZ3VQs.png', name: 'Нижний Новгород', description: 'Город в центральной России. Красивый город.', favorite: false },
    { id: 6, image: 'https://screenshots.enkod.tech/ilya_novikovvjgSDr7xZl6A2UmH.png', name: 'Челябинск', description: 'Город в Российской Федерации, седьмой по количеству жителей', favorite: false },
    { id: 7, image: 'https://screenshots.enkod.tech/ilya_novikovc2dbr7KvIJ2dknlZ.png', name: 'Казань', description: 'Город в России, столица Республики Татарстан.', favorite: true }
  ];
  sortCitiesByFavorite(): City[] {
    return this.cities.slice().sort((a, b) => {
      if (a.favorite === b.favorite) {
        return 0;
      } else if (a.favorite) {
        return -1;
      } else {
        return 1;
      }
    });
  };
  onFavoriteChanged(cityId: number) {
    const foundCity = this.cities.find(c => c.id === cityId);
    if (foundCity) {
      foundCity.favorite = !foundCity.favorite;
    }
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
