import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'add-itens',
  standalone: false,
  templateUrl: './add-itens.component.html',
  styleUrl: './add-itens.component.scss'
})
export class AddItensComponent {
  productNameControl = new FormControl('', [Validators.required, Validators.minLength(3)]);

  @Output() productNameEmmiter = new EventEmitter<string>();
  
  addItem(){
    
    const currentValidators = this.productNameControl.validator;

    if (!this.productNameControl.hasError('required')) {
      this.productNameEmmiter.emit( String( this.productNameControl.getRawValue()) )

      this.productNameControl.clearValidators();
      this.productNameControl.setValue("", { emitEvent: false });
      
      this.productNameControl.setValidators( currentValidators )
    }
  }

  getErrorMessage() {
    if (this.productNameControl.hasError('required')) {
      return 'Você deve preencher corretamente o nome do produto';
    }
    return 'Você deve preencher corretamente o nome do produto';
  }

}
