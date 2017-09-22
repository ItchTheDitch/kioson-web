import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Report2015Component } from './report2015.component';

describe('Report2015Component', () => {
  let component: Report2015Component;
  let fixture: ComponentFixture<Report2015Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Report2015Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Report2015Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
