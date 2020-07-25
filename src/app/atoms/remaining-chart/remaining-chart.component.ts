import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remaining-chart',
  templateUrl: './remaining-chart.component.html',
  styleUrls: ['./remaining-chart.component.scss']
})
export class RemainingChartComponent implements OnInit {
  leftDays = Number(sessionStorage.getItem('leftDays'));
  initialDays = Number(sessionStorage.getItem('initialDays'));
  percentLeft = Math.round(this.leftDays * 100);
  percentRight = this.percentLeft - 100;
  constructor() {
  }

  ngOnInit(): void {
  }

  get percentageInitial(): number {
    return 100 - this.percentageFinal;
  }

  get percentageFinal(): number {
    return this.initialDays / 100 * this.leftDays;
  }

}
