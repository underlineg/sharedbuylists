import { Component,  ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-itens',
  standalone: false,
  templateUrl: './itens.component.html',
  styleUrl: './itens.component.scss'
})

export class ItensComponent {

  @ViewChild('containerListItens', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  componentRef!: ComponentRef<any>;


  //recebe o valor vindo do add-item
  addItem(item:string){
    this.componentRef = this.vcr.createComponent(ItemComponent);
    this.componentRef.instance.productName = item
    this.componentRef.instance.totalValueEmitter.subscribe((e:any) => this.getTotalValue(e));
    
  }

  shareList(){
    console.log("Starting to share list link to another person...")
  }

  getTotalValue(value:any){
      console.log("getting value", value)
  }
}
