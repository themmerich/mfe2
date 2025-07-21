import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {connectRouter} from './connect-router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor() {
    connectRouter();
  }
}
