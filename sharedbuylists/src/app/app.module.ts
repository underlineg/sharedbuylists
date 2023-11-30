import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoricComponent } from './historic/historic.component';
import { ItensComponent } from './itens/itens.component'; 
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [HistoricComponent, ItensComponent, LoginComponent],
  exports: [HistoricComponent, ItensComponent, LoginComponent],
  imports: [
    
  ]
})
export class SharedModule { }
