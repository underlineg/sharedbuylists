import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-itens',
  standalone: false,
  templateUrl: './itens.component.html',
  styleUrl: './itens.component.scss'
})

export class ItensComponent {

  addItem(item:string){
    console.log(item)
  }
}
