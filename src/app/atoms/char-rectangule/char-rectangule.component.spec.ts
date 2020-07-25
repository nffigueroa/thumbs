import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharRectanguleComponent } from './char-rectangule.component';

describe('CharRectanguleComponent', () => {
  let component: CharRectanguleComponent;
  let fixture: ComponentFixture<CharRectanguleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharRectanguleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharRectanguleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
