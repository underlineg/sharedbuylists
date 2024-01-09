import { Component,  ViewChild, ViewContainerRef } from '@angular/core';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-itens',
  standalone: false,
  templateUrl: './itens.component.html',
  styleUrl: './itens.component.scss'
})

export class ItensComponent {

  @ViewChild('containerListItens', { read: ViewContainerRef })
  vcr!: ViewContainerRef;

  //recebe o valor vindo do add-item
  addItem(item:string){
    this.vcr.createComponent(ItemComponent).instance.productName = item;
  }
}
