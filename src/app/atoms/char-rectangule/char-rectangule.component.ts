import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-char-rectangule',
  templateUrl: './char-rectangule.component.html',
  styleUrls: ['./char-rectangule.component.scss']
})
export class CharRectanguleComponent implements OnInit {
  positiveVotes = 1;
  negativeVotes = 1;
  positivePercent: number;
  negativePercent: number;
  nameStar: string;
  mainStyle: boolean;
  heightMsg = 0;
  positionMsg = '20%';
  @Input() set calculate(cal: any){
    this.calcPercent();
  }
  @Input() set name(text: string) {
    this.nameStar = text;
    this.calcPercent();
  }
  @Input() set isMain(b: boolean) {
    this.mainStyle = b;
  }
  @Output() vote = new EventEmitter<any>();
  constructor() {
  }

  ngOnInit(): void {
    const negative = Number(sessionStorage.getItem(`negativeVotes${this.nameStar}`));
    const positive = Number(sessionStorage.getItem(`positiveVotes${this.nameStar}`));
    this.positiveVotes = positive ? positive : 1;
    this.negativeVotes = negative ? negative : 1;
  }
  calcPercent(): void {
    this.positiveVotes = Number(sessionStorage.getItem(`positiveVotes${this.nameStar}`));
    this.negativeVotes = Number(sessionStorage.getItem(`negativeVotes${this.nameStar}`));
    if (!this.negativeVotes) {
      this.negativeVotes = 1;
    }
    if (!this.positiveVotes) {
      this.positiveVotes = 1;
    }
    this.positivePercent = Math.round((this.positiveVotes * 100) / (this.positiveVotes + this.negativeVotes));
    this.negativePercent = Math.round((this.negativeVotes * 100) / (this.positiveVotes + this.negativeVotes));
  }


}
