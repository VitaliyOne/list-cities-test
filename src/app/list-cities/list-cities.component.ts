import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { City } from '../types';

@Component({
  selector: 'app-list-cities',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './list-cities.component.html',
  styleUrl: './list-cities.component.css'
})
export class ListCitiesComponent {
  @Input() cities: City[] = [];
  @Output() favoriteChanged = new EventEmitter<number>();

  toggleFavorite(cityId: number) {
    console.log(cityId)
    this.favoriteChanged.emit(cityId);
  }
}
