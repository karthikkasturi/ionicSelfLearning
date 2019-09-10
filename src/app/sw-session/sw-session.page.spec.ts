import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwSessionPage } from './sw-session.page';

describe('SwSessionPage', () => {
  let component: SwSessionPage;
  let fixture: ComponentFixture<SwSessionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwSessionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwSessionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
