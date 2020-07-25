import { Component, OnInit, Input, ViewChildren, ViewChild } from '@angular/core';

@Component({
  selector: 'app-button-square',
  templateUrl: './button-square.component.html',
  styleUrls: ['./button-square.component.scss']
})
export class ButtonSquareComponent implements OnInit {
  @Input() text: string;
  constructor() { }

  ngOnInit() {
  }

}
