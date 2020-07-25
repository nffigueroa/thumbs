import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.scss']
})
export class ItemMenuComponent {
  @Input() text: string;
  constructor() {
   }
  redirect(title): void {
    window.open('', '_blank').document.title = title;
  }

}
