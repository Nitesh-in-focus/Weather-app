import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly baseUrl = 'https://api.weatherapi.com/v1';
  private readonly apiKey = environment.weatherApiKey;

  constructor(private http: HttpClient) {}

  /**
   * Get current + forecast weather for up to 5 days.
   * @param city City name or lat,lng coordinates
   */
  getForecast(city: string): Observable<WeatherData> {
    const url = `${this.baseUrl}/forecast.json?key=${this.apiKey}&q=${city}&days=5&aqi=no&alerts=no`;
    return this.http.get<WeatherData>(url);
  }

  /**
   * (Optional) Get current weather only — future proofing
   */
  getCurrentWeather(city: string): Observable<WeatherData> {
    const url = `${this.baseUrl}/current.json?key=${this.apiKey}&q=${city}&aqi=no`;
    return this.http.get<WeatherData>(url);
  }
}
