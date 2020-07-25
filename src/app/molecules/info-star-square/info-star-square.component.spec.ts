import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoStarSquareComponent } from './info-star-square.component';
import { AtomsModule } from '../../atoms/atoms.module';

describe('InfoStarSquareComponent', () => {
  let component: InfoStarSquareComponent;
  let fixture: ComponentFixture<InfoStarSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoStarSquareComponent ],
      imports: [
        AtomsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoStarSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.config = {
      name: 'tx',
      nameStar: 'Malal',
      description: 'Algo'
    };
  });

  // it('should create', () => {
  //   expect(component.conf({name: 'Algo'}));
  // });
});
