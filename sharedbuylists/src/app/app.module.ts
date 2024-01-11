import { NgModule } from '@angular/core';
// core application
import { HistoricComponent } from './modules/historic/historic.component';
import { ItensComponent } from './modules/itens/itens/itens.component'; 
import { LoginComponent } from './modules/login/login.component';
import { AddItensComponent } from './modules/itens/add-itens/add-itens.component';


//navigation
import { FooterComponent } from './modules/footer-component/footer-component.component';
import { HeaderComponent } from './modules/header-component/header-component.component';


import { ItemComponent } from './modules/itens/item/item.component';
import { ReactiveFormsModule, FormsModule  } from "@angular/forms";
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule}  from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { CommonModule } from '@angular/common';







@NgModule({
  declarations: [HistoricComponent, ItensComponent, LoginComponent, AddItensComponent,  ItemComponent, FooterComponent, HeaderComponent],
  exports: [HistoricComponent, ItensComponent, LoginComponent, AddItensComponent,  ItemComponent, FooterComponent, HeaderComponent],
  imports: [ReactiveFormsModule, MatButtonModule, MatIconModule, 
    MatDividerModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, CommonModule, FormsModule]
})
export class SharedModule { }
