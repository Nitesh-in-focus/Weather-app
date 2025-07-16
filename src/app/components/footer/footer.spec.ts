import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Footer } from './footer';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
    }).compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the footer', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the current year', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const year = new Date().getFullYear().toString();
    expect(compiled.textContent).toContain(year);
  });
});
