import {Routes} from '@angular/router';
import {Home} from './core/components/home/home'
import {About} from './core/components/about/about';

export const routes: Routes = [
  {path: '', component: Home, title: 'Nemanja Bojović'},
  {path: 'about', component: About, title: 'About | Nemanja Bojović'},
  {path: '**', redirectTo: ''},
];
