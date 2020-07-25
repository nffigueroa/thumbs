import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-square',
  templateUrl: './title-square.component.html',
  styleUrls: ['./title-square.component.scss']
})
export class TitleSquareComponent implements OnInit {
  @Input() text: string;
  constructor() { }

  ngOnInit() {
  }

}
