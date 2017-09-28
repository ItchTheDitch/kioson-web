import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LembagaPenunjangComponent } from './lembaga-penunjang.component';

describe('LembagaPenunjangComponent', () => {
  let component: LembagaPenunjangComponent;
  let fixture: ComponentFixture<LembagaPenunjangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LembagaPenunjangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LembagaPenunjangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
