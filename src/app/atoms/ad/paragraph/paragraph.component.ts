import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent implements OnInit {
  txt: string;
  @Input()
  set text(t: string) {
    this.txt = t;
  }
  constructor() { console.log(this.txt);
   }

  ngOnInit() {
  }

}
