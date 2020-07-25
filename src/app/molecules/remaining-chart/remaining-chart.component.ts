import { Component, OnInit } from '@angular/core';
import * as moment_ from 'moment';

@Component({
  selector: 'app-remaining-chart-mol',
  templateUrl: './remaining-chart.component.html',
  styleUrls: ['./remaining-chart.component.scss']
})
export class RemainingChartComponent implements OnInit {
  private dateEnd = '2020-08-28';
  private dateInit = '2020-07-01';
  leftDays: number;
  initDays: number;
  constructor() {
   }

  ngOnInit(): void {
    const dateEnd = moment_(this.dateEnd, 'YYYY-MM-DD');
    const dateInit = moment_(this.dateInit, 'YYYY-MM-DD');
    const now = moment_(new Date());
    this.leftDays = dateEnd.diff(now, 'days');
    this.initDays = dateEnd.diff(dateInit, 'days');
    sessionStorage.setItem('leftDays', this.leftDays.toString());
    sessionStorage.setItem('initialDays', this.initDays.toString());
  }

}
