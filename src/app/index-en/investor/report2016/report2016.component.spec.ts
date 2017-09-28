import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Report2016Component } from './report2016.component';

describe('Report2016Component', () => {
  let component: Report2016Component;
  let fixture: ComponentFixture<Report2016Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Report2016Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Report2016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
