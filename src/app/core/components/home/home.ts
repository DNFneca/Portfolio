import { Component } from '@angular/core';
import { PROFILE, PROJECTS } from '../../portfolio.data'

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  protected readonly profile = PROFILE;
  protected readonly projects = PROJECTS;
}
