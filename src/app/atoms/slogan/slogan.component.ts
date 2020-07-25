import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slogan',
  templateUrl: './slogan.component.html',
  styleUrls: ['./slogan.component.scss']
})
export class SloganComponent implements OnInit {
  @Input() text: string;
  constructor() {
    console.log(this.text);

  }

  ngOnInit() {
  }

}
