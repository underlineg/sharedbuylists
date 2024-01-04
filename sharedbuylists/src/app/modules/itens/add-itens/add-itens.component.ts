import { Component, Output, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'add-itens',
  standalone: false,
  templateUrl: './add-itens.component.html',
  styleUrl: './add-itens.component.scss'
})
export class AddItensComponent {
  productNameControl = new FormControl("");

  @Output() productNameOutput:string = "";

  
  addItem(){
    this.productNameOutput = String( this.productNameControl.getRawValue() )
  }
}
