import { Component, Input } from '@angular/core';

@Component({
  selector: 'item',
  standalone: false,
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Input() productName: string = "";
}
