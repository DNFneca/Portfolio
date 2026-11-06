import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show Home and About on the left and +Contact on the right', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;

    const navLinks = Array.from(el.querySelectorAll('header nav a')).map((a) =>
      a.textContent?.trim(),
    );
    expect(navLinks).toEqual(['Home', 'About']);
    expect(el.querySelector('header button')?.textContent?.trim()).toBe('+Contact');
  });

  it('should toggle the contact panel', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;

    expect(el.querySelector('#contact-panel')).toBeNull();
    el.querySelector<HTMLButtonElement>('header button')?.click();
    await fixture.whenStable();
    expect(el.querySelector('#contact-panel')).not.toBeNull();
  });
});
