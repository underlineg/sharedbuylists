import { NgModule } from '@angular/core';
import { HistoricComponent } from './modules/historic/historic.component';
import { ItensComponent } from './modules/itens/itens/itens.component'; 
import { LoginComponent } from './modules/login/login/login.component';
import { AddItensComponent } from './modules/itens/add-itens/add-itens.component';

import { ItemComponent } from './modules/itens/item/item.component';
import { ReactiveFormsModule } from "@angular/forms";
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';




@NgModule({
  declarations: [HistoricComponent, ItensComponent, LoginComponent, AddItensComponent,  ItemComponent],
  exports: [HistoricComponent, ItensComponent, LoginComponent, AddItensComponent,  ItemComponent],
  imports: [ReactiveFormsModule, MatButtonModule, MatIconModule,
    MatDividerModule, MatFormFieldModule, MatInputModule]
})
export class SharedModule { }
