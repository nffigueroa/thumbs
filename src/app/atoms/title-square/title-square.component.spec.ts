import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleSquareComponent } from './title-square.component';

describe('TitleSquareComponent', () => {
  let component: TitleSquareComponent;
  let fixture: ComponentFixture<TitleSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
