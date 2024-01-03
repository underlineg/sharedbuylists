import { NgModule } from '@angular/core';
import { HistoricComponent } from './modules/historic/historic.component';
import { ItensComponent } from './modules/itens/itens/itens.component'; 
import { LoginComponent } from './modules/login/login/login.component';
import { AddItensComponent } from './modules/itens/add-itens/add-itens.component';
import { ListItensComponent } from './modules/itens/list-itens/list-itens.component';
import { ItemComponent } from './modules/itens/item/item.component';


@NgModule({
  declarations: [HistoricComponent, ItensComponent, LoginComponent, AddItensComponent, ListItensComponent, ItemComponent],
  exports: [HistoricComponent, ItensComponent, LoginComponent, AddItensComponent, ListItensComponent, ItemComponent],
  imports: []
})
export class SharedModule { }
