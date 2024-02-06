import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './app.module';
import { environment } from '../environments/environments';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Listas compartilhada de compras';
}
