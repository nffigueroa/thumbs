import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subtitle-square',
  templateUrl: './subtitle-square.component.html',
  styleUrls: ['./subtitle-square.component.scss']
})
export class SubtitleSquareComponent implements OnInit {
  @Input() text: string;
  constructor() { }

  ngOnInit() {
  }

}
