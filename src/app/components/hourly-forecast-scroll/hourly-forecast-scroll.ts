import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherData } from '../../models/weather';

@Component({
  selector: 'app-hourly-forecast-scroll',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hourly-forecast-scroll.html',
  styleUrls: ['./hourly-forecast-scroll.css'],
})
export class HourlyForecastScroll {
  @Input() hourlyData: WeatherData['forecast']['forecastday'][0]['hour'] = [];
}
