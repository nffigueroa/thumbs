import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remaining-chart',
  templateUrl: './remaining-chart.component.html',
  styleUrls: ['./remaining-chart.component.scss']
})
export class RemainingChartComponent implements OnInit {
  leftDays: number;
  initialDays: number;
  percentLeft = Math.round(this.leftDays * 100);
  percentRight = this.percentLeft - 100;
  constructor() {
  }

  ngOnInit(): void {
    this.leftDays = Number(sessionStorage.getItem('leftDays'));
    this.initialDays = Number(sessionStorage.getItem('initialDays'))
  }

  get percentageInitial(): number {
    return 100 - this.percentageFinal;
  }

  get percentageFinal(): number {
    return this.initialDays / 100 * this.leftDays;
  }

}
