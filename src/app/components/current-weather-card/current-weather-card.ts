import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherData } from '../../models/weather';

@Component({
  selector: 'app-current-weather-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './current-weather-card.html',
  styleUrls: ['./current-weather-card.css']
})
export class CurrentWeatherCard {
  @Input() weather!: WeatherData;
}
