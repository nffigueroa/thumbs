import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  heigthList = 0;
  public items: Array<object>;
  title = 'Hola hola';

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        text: 'Past Trials'
      },
      {
        text: 'How It Works'
      },
      {
        text: 'Log In / Sign Up'
      }
    ];
  }

  changeHeigth(): void {
    this.heigthList = Number(this.heigthList) > 0 ? 0 : 80;
  }

}
