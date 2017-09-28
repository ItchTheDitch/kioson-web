import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexIdComponent } from './index-id.component';

describe('IndexIdComponent', () => {
  let component: IndexIdComponent;
  let fixture: ComponentFixture<IndexIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
