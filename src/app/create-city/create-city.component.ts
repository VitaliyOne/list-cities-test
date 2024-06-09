import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-city',
  standalone: true,
  templateUrl: './create-city.component.html',
  styleUrl: './create-city.component.css',
  imports: [HeaderComponent, RouterLink]
})
export class CreateCityComponent {
  headerTitle: string = 'Создание города';
}
