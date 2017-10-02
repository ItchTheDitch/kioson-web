import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexEnComponent } from './index-en.component';

describe('IndexEnComponent', () => {
  let component: IndexEnComponent;
  let fixture: ComponentFixture<IndexEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
