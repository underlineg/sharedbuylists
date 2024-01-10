import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';




@Component({
  selector: 'item',
  standalone: false,
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Input() productName: string = "";
  isDestroyed:boolean = false //check ngOnDestroy in future! Perhaps a "delete" component?
  isSelected:boolean = false;
  itemQdtFormControl = new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern(/^-?\d*(\.\d+)?$/)]);
  itemPriceFormControl = new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern(/^-?\d*(\,\d+)?$/)]);
  qtd:number = 0;
  price:number = 0;
  totalToSend:number = 0;

  @Output() totalValueEmitter = new EventEmitter<number>();

  deleteItem(){
    this.isDestroyed = true;
  }

  closeItem(){
    this.itemQdtFormControl.markAsTouched()
    this.itemPriceFormControl.markAsTouched();

    if (this.itemQdtFormControl.valid && this.itemPriceFormControl.valid) {
      if(this.isSelected) {
        this.isSelected = false;
        return
      }
      this.isSelected = true;
      this.qtd =  Number(this.itemQdtFormControl.getRawValue())
      this.price = Number(this.itemPriceFormControl.getRawValue()?.replace(",", "."))
      this.calcTotalValue();
    }
  }

  onCheckboxChange(e:any):void{
    

    if(this.itemQdtFormControl.invalid && this.itemPriceFormControl.invalid){
      
      this.itemQdtFormControl.markAsTouched()
      this.itemPriceFormControl.markAsTouched();
      return
    }
    this.closeItem()
  }

  getErrorMessage() {
    if (this.itemQdtFormControl.hasError('required') || this.itemPriceFormControl.hasError('required')) {
      return 'Você deve preencher corretamente um valor';
    }
    return 'Você deve preencher corretamente um valor';
  }

  calcTotalValue(){
    this.totalToSend = this.qtd*this.price;
    this.totalValueEmitter.emit( this.totalToSend )
    console.log("Sending data outside", this.totalToSend)
  }

}
