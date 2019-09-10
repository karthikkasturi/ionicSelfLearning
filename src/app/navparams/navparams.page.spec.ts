import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavparamsPage } from './navparams.page';

describe('NavparamsPage', () => {
  let component: NavparamsPage;
  let fixture: ComponentFixture<NavparamsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavparamsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavparamsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
