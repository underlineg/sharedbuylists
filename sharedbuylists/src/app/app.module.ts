import { NgModule } from '@angular/core';
import { HistoricComponent } from './historic/historic.component';
import { ItensComponent } from './itens/itens.component'; 
import { LoginComponent } from './login/login.component';
import { AddItensComponent } from './add-itens/add-itens.component';
import { ListItensComponent } from './list-itens/list-itens.component';
import { ItemComponent } from './item/item.component';


@NgModule({
  declarations: [HistoricComponent, ItensComponent, LoginComponent, AddItensComponent, ListItensComponent, ItemComponent],
  exports: [HistoricComponent, ItensComponent, LoginComponent, AddItensComponent, ListItensComponent, ItemComponent],
  imports: []
})
export class SharedModule { }
