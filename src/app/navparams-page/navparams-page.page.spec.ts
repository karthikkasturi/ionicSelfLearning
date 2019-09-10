import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavparamsPagePage } from './navparams-page.page';

describe('NavparamsPagePage', () => {
  let component: NavparamsPagePage;
  let fixture: ComponentFixture<NavparamsPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavparamsPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavparamsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
