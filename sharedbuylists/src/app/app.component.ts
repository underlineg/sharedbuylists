import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HistoricComponent } from './historic/historic.component';
import { ItensComponent } from './itens/itens.component';
import { LoginComponent } from './login/login.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, 
    HistoricComponent,
    ItensComponent,
    LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sharedbuylists';
}
