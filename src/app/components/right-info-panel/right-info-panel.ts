import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherData } from '../../models/weather';

@Component({
  selector: 'app-right-info-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './right-info-panel.html',
  styleUrls: ['./right-info-panel.css'],
})
export class RightInfoPanel {
  @Input() weatherData!: WeatherData | null;
}
