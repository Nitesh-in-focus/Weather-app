import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrentWeatherCard } from './current-weather-card';
import { WeatherData } from '../../models/weather';

describe('CurrentWeatherCard', () => {
  let component: CurrentWeatherCard;
  let fixture: ComponentFixture<CurrentWeatherCard>;

  const mockData: WeatherData = {
    location: {
      name: 'Bengaluru',
      country: 'India',
      region: 'KA',
      lat: 12.97,
      lon: 77.59,
      tz_id: 'Asia/Kolkata',
      localtime: '2025-07-16 15:00',
    },
    current: {
      temp_c: 30,
      temp_f: 86,
      condition: {
        text: 'Sunny',
        icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
      },
      humidity: 50,
      wind_kph: 10,
      wind_dir: 'E',
      feelslike_c: 32,
      feelslike_f: 90,
      last_updated: '2025-07-16 14:45',
    },
    forecast: { forecastday: [] },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentWeatherCard],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentWeatherCard);
    component = fixture.componentInstance;
    component.weather = mockData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display city and temperature', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Bengaluru');
    expect(compiled.textContent).toContain('30°C');
  });
});
