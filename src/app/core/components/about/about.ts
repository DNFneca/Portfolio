import { Component } from '@angular/core';
import {PROFILE, SKILL_GROUPS} from '../../portfolio.data';

@Component({
  imports: [],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {
  protected readonly profile = PROFILE;
  protected readonly skillGroups = SKILL_GROUPS;
}
