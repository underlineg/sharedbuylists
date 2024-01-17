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
  arrItens:any = {};

  //recebe o valor vindo do add-item
  addItem(item:string){
    this.componentRef = this.vcr.createComponent(ItemComponent);
    this.componentRef.instance.productName = item
    this.componentRef.instance.totalValueEmitter.subscribe((e:any) => this.getTotalValue(e));
    this.componentRef.instance.removeElementEmitter.subscribe((e:any) => this.removeItem(e) )
    
  }

  shareList(){
    console.log("Starting to share list link to another person...")
  }

  removeItem(e:any){
    delete this.arrItens[e]
  }

  getTotalValue(value:any){
      Object.assign(this.arrItens, value)
  }
}
