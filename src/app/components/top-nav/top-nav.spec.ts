import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopNav } from './top-nav';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('TopNav', () => {
  let component: TopNav;
  let fixture: ComponentFixture<TopNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopNav],
    }).compileComponents();

    fixture = TestBed.createComponent(TopNav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit searchCity event on search', () => {
    spyOn(component.searchCity, 'emit');
    component.cityName = 'London';
    component.onSearch();
    expect(component.searchCity.emit).toHaveBeenCalledWith('London');
  });

  it('should not emit if input is empty or just spaces', () => {
    spyOn(component.searchCity, 'emit');
    component.cityName = '   ';
    component.onSearch();
    expect(component.searchCity.emit).not.toHaveBeenCalled();
  });

  it('should emit toggleTheme event on theme change', () => {
    spyOn(component.toggleTheme, 'emit');
    const fakeEvent = { target: { checked: true } };
    component.onThemeToggle(fakeEvent);
    expect(component.toggleTheme.emit).toHaveBeenCalledWith(true);
  });

  it('should reset cityName after search', () => {
    component.cityName = 'Tokyo';
    component.onSearch();
    expect(component.cityName).toBe('');
  });
});
