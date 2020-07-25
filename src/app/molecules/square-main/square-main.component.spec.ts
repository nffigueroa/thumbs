import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareMainComponent } from './square-main.component';
import { AtomsModule } from '../../atoms/atoms.module';

describe('SquareMainComponent', () => {
  let component: SquareMainComponent;
  let fixture: ComponentFixture<SquareMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquareMainComponent ],
      imports: [
        AtomsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.config = {
      name: 'tx',
      nameStar: 'Malal'
    };
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
