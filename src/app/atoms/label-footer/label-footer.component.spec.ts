import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelFooterComponent } from './label-footer.component';

describe('LabelFooterComponent', () => {
  let component: LabelFooterComponent;
  let fixture: ComponentFixture<LabelFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
