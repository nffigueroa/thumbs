import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  txt: string;
  subText: string;
  @Input()
  set text(t: string) {
    this.txt = t;
  }
  @Input() set sub(t: string) {
    this.subText = t;
  }
  constructor() {
   }

  ngOnInit() {
  }

}
