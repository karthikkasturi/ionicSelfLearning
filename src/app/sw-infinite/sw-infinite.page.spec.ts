import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwInfinitePage } from './sw-infinite.page';

describe('SwInfinitePage', () => {
  let component: SwInfinitePage;
  let fixture: ComponentFixture<SwInfinitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwInfinitePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwInfinitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
