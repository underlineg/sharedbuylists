import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { ItensComponent } from './modules/itens/itens/itens.component';
import { HistoricComponent } from './modules/historic/historic.component';

export const routes: Routes = [
    {'path': '', component: LoginComponent},
    {'path': 'lists', component: ItensComponent},
    {'path': 'previous', component: HistoricComponent},
];
