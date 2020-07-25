import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemainingChartComponent } from './remaining-chart.component';

describe('RemainingChartComponent', () => {
  let component: RemainingChartComponent;
  let fixture: ComponentFixture<RemainingChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemainingChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemainingChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
