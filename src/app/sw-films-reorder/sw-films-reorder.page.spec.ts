import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwFilmsReorderPage } from './sw-films-reorder.page';

describe('SwFilmsReorderPage', () => {
  let component: SwFilmsReorderPage;
  let fixture: ComponentFixture<SwFilmsReorderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwFilmsReorderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwFilmsReorderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
