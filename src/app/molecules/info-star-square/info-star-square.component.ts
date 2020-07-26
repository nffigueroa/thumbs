import { Component, OnInit, Input } from '@angular/core';
import {
  DomSanitizer,
  SafeHtml,
  SafeUrl,
  SafeStyle
} from '@angular/platform-browser';
@Component({
  selector: 'app-info-star-square',
  templateUrl: './info-star-square.component.html',
  styleUrls: ['./info-star-square.component.scss']
})
export class InfoStarSquareComponent implements OnInit {
  nameStar: string;
  config: any;
  recalculatePercentages: any;
  alertBottom = '-50px';
  @Input()
set conf(config: any) {
  this.config = config;
  this.nameStar = this.config.nameStar;
}
  constructor(private sanitizer: DomSanitizer) {
   }
  ngOnInit(): void {
  }

  votes(event: any): void {
    let positives = Number(sessionStorage.getItem(`positiveVotes${this.config.nameStar}`));
    let negatives = Number(sessionStorage.getItem(`negativeVotes${this.config.nameStar}`));

    if (event.vote) {
      positives = positives + 2;
    } else {
      negatives = negatives + 2;
    }
    sessionStorage.setItem(`positiveVotes${event.star}`, positives.toString());
    sessionStorage.setItem(`negativeVotes${event.star}`, negatives.toString());
    this.config.statusVotation = positives > negatives;
    this.recalculatePercentages = positives + negatives + 1;
    this.alertBottom = '10px';
    setTimeout(() => {
      this.alertBottom = '-50px';
    }, 1500);
  }

  getClass(): string {
    return this.config.statusVotation ? 'square__ltl-icon' : 'square__ltl-icon-negative';
  }
}
