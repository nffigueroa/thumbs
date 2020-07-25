import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdBlockComponent } from './ad-block.component';
import { MoleculesModule } from '../../molecules/molecules.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AdBlockComponent', () => {
  let component: AdBlockComponent;
  let fixture: ComponentFixture<AdBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdBlockComponent ],
      imports: [
        MoleculesModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
