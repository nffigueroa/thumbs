import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtitleSquareComponent } from './subtitle-square.component';

describe('SubtitleSquareComponent', () => {
  let component: SubtitleSquareComponent;
  let fixture: ComponentFixture<SubtitleSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtitleSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtitleSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
