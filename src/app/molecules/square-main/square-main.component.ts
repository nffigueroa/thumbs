import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-square-main',
  templateUrl: './square-main.component.html',
  styleUrls: ['./square-main.component.scss']
})
export class SquareMainComponent implements OnInit {
  nameStar: string;
  config: any;
  @Input()
set conf(config: any) {
  this.config = config;
  this.nameStar = config.nameStar;
  this.setIcon(null);
}
  constructor() { }

  ngOnInit() {
  }

  setIcon(event) {
    let positives, negatives;
      positives = sessionStorage.getItem(`positiveVotes${this.config.nameStar}`);
      negatives = sessionStorage.getItem(`negativeVotes${this.config.nameStar}`);
      this.config.statusVotation = positives > negatives;
  }

  getClass() {
    return this.config.statusVotation ? 'square__ltl-icon' : 'square__ltl-icon-negative';
  }

}
