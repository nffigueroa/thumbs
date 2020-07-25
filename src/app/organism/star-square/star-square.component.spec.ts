import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarSquareComponent } from './star-square.component';
import { MoleculesModule } from '../../molecules/molecules.module';

describe('StarSquareComponent', () => {
  let component: StarSquareComponent;
  let fixture: ComponentFixture<StarSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarSquareComponent ],
      imports: [
        MoleculesModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
