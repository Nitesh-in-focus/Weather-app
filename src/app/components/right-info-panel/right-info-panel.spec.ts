import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RightInfoPanel } from './right-info-panel';

describe('RightInfoPanel', () => {
  let component: RightInfoPanel;
  let fixture: ComponentFixture<RightInfoPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightInfoPanel]
    }).compileComponents();

    fixture = TestBed.createComponent(RightInfoPanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
