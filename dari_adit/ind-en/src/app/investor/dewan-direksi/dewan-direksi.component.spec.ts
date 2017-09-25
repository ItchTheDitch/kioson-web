import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DewanDireksiComponent } from './dewan-direksi.component';

describe('DewanDireksiComponent', () => {
  let component: DewanDireksiComponent;
  let fixture: ComponentFixture<DewanDireksiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DewanDireksiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DewanDireksiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
