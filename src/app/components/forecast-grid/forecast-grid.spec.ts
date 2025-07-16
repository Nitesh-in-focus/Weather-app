import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForecastGrid } from './forecast-grid';

describe('ForecastGrid', () => {
  let component: ForecastGrid;
  let fixture: ComponentFixture<ForecastGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForecastGrid],
    }).compileComponents();

    fixture = TestBed.createComponent(ForecastGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
