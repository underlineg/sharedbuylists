import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'add-itens',
  standalone: false,
  templateUrl: './add-itens.component.html',
  styleUrl: './add-itens.component.scss'
})
export class AddItensComponent {
  productNameControl = new FormControl("");

  @Output() productNameEmmiter = new EventEmitter<string>();

  
  addItem(){
    // this.productNameOutput = string( this.productNameControl.getRawValue() )
    this.productNameEmmiter.emit( String( this.productNameControl.getRawValue()) )
    console.log(this.productNameEmmiter)
  }
}
