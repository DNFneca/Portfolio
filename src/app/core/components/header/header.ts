import {Component, signal} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {PROFILE} from '../../../shared/data/portfolio.data';

@Component({
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  selector: 'app-header',
  host: {'(document:keydown.escape)': 'closeContact()'},
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  protected readonly profile = PROFILE;
  protected readonly contactOpen = signal(false);

  protected toggleContact(): void {
    this.contactOpen.update((open) => !open);
  }

  protected closeContact(): void {
    this.contactOpen.set(false);
  }
}
