import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { ListCitiesComponent } from "./list-cities/list-cities.component";
import { TileCitiesComponent } from "./tile-cities/tile-cities.component";
import { City } from './types';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    [RouterOutlet],
    CommonModule,
    FooterComponent,
    HeaderComponent,
    ListCitiesComponent,
    TileCitiesComponent
  ]
})
export class AppComponent {
  title = 'list-cities';
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
  toggleView(view: string) {
    if (view === 'list') {
      this.isListViewActive = true;
      this.isTileViewActive = false;
    } else if (view === 'tile') {
      this.isListViewActive = false;
      this.isTileViewActive = true;
    }
  }
}