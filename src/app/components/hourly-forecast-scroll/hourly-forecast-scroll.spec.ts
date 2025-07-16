import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HourlyForecastScroll } from './hourly-forecast-scroll';

describe('HourlyForecastScroll', () => {
  let component: HourlyForecastScroll;
  let fixture: ComponentFixture<HourlyForecastScroll>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HourlyForecastScroll],
    }).compileComponents();

    fixture = TestBed.createComponent(HourlyForecastScroll);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
