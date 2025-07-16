import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherData } from '../../models/weather';

@Component({
  selector: 'app-forecast-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forecast-grid.html',
  styleUrls: ['./forecast-grid.css'],
})
export class ForecastGrid {
  @Input() forecastDays: WeatherData['forecast']['forecastday'] = [];
}
