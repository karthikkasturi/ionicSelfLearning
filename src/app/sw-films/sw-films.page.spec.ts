import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwFilmsPage } from './sw-films.page';

describe('SwFilmsPage', () => {
  let component: SwFilmsPage;
  let fixture: ComponentFixture<SwFilmsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwFilmsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwFilmsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
