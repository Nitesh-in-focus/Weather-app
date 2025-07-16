import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from './services/weather';
import { WeatherData } from './models/weather';

// 💡 Import components
import { TopNav } from './components/top-nav/top-nav';
import { Footer } from './components/footer/footer';
import { ForecastGrid } from './components/forecast-grid/forecast-grid';
import { HourlyForecastScroll } from './components/hourly-forecast-scroll/hourly-forecast-scroll';
import { CurrentWeatherCard } from './components/current-weather-card/current-weather-card';
import { RightInfoPanel } from './components/right-info-panel/right-info-panel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    TopNav,
    Footer,
    ForecastGrid,
    HourlyForecastScroll,
    CurrentWeatherCard,
    RightInfoPanel,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class AppComponent implements OnInit {
  weatherData: WeatherData | null = null;
  loading = false;
  error = '';
  recentCities: string[] = [];

  isDaytime: boolean = true;
  isManualTheme: boolean = false;

  constructor(
    private weatherService: WeatherService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.restoreTheme();
    this.loadRecentCities();
    this.getLocationWeather();
  }

  // ⏰ Set theme automatically based on hour
  private setThemeByTime(): void {
    if (this.isManualTheme) return;
    const hour = new Date().getHours();
    this.isDaytime = hour >= 6 && hour < 18;
    this.saveTheme();
  }

  // 🌙 Toggle from top nav switch
  onThemeToggle(toNightMode: boolean): void {
    this.isDaytime = !toNightMode;
    this.isManualTheme = true;
    this.saveTheme();
  }

  private saveTheme(): void {
    localStorage.setItem(
      'theme',
      JSON.stringify({
        isDaytime: this.isDaytime,
        isManualTheme: this.isManualTheme,
      })
    );
  }

  private restoreTheme(): void {
    const themeRaw = localStorage.getItem('theme');
    if (themeRaw) {
      const theme = JSON.parse(themeRaw);
      this.isDaytime = theme.isDaytime;
      this.isManualTheme = theme.isManualTheme;
    } else {
      this.setThemeByTime();
    }
  }

  // 📍 Auto detect via location
  private getLocationWeather(): void {
    if (!navigator.geolocation) {
      console.warn('Geolocation not supported');
      return;
    }

    this.loading = true;
    this.error = 'Detecting your location...';
    this.cdr.detectChanges();

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = `${position.coords.latitude},${position.coords.longitude}`;
        this.onSearch(coords);
      },
      (error) => {
        console.warn('Geolocation error:', error.message);
        this.error = 'Unable to access location.';
        this.loading = false;
        this.cdr.detectChanges();
      }
    );
  }

  // 🔍 Search from TopNav
  onSearch(cityName: string): void {
    const trimmedCity = cityName.trim();
    if (!trimmedCity) {
      this.error = 'Please enter a city name';
      this.loading = false;
      this.cdr.detectChanges();
      return;
    }

    this.loading = true;
    this.error = '';
    this.weatherData = null;
    this.setThemeByTime(); // Re-evaluate based on time if auto
    this.cdr.detectChanges();

    this.weatherService.getForecast(trimmedCity).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.saveRecentCity(trimmedCity);
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('API ERROR:', err);
        this.error = 'Could not fetch weather. Try again.';
        this.weatherData = null;
        this.loading = false;
        this.cdr.detectChanges();
      },
    });
  }

  // 🕑 Load previous searches
  private loadRecentCities(): void {
    const stored = localStorage.getItem('recentCities');
    if (stored) {
      this.recentCities = JSON.parse(stored);
    }
  }

  private saveRecentCity(city: string): void {
    this.recentCities = [city, ...this.recentCities.filter((c) => c !== city)];
    this.recentCities = this.recentCities.slice(0, 5);
    localStorage.setItem('recentCities', JSON.stringify(this.recentCities));
  }
}
