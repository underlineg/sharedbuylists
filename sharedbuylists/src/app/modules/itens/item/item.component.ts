import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';



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
  itemQdtFormControl = new FormControl();
  itemPriceFormControl = new FormControl();
  qtd?:any = 0;
  price?:any = 0;

  deleteItem(){
    this.isDestroyed = true;
  }


  closeItem(){
    if(this.isSelected) {
      this.isSelected = false;
      return
    }
    this.isSelected = true;
    this.qtd =  this.itemQdtFormControl.getRawValue()
    this.price = this.itemPriceFormControl.getRawValue()
  }
}
