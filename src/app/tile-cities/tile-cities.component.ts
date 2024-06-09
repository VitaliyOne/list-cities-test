import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { City } from '../types';

@Component({
  selector: 'app-tile-cities',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './tile-cities.component.html',
  styleUrl: './tile-cities.component.css'
})
export class TileCitiesComponent {
  @Input() cities: City[] = [];
}
