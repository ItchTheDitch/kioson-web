import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Report2017Component } from './report2017.component';

describe('Report2017Component', () => {
  let component: Report2017Component;
  let fixture: ComponentFixture<Report2017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Report2017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Report2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
