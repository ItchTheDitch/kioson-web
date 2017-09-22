import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockShareComponent } from './stock-share.component';

describe('StockShareComponent', () => {
  let component: StockShareComponent;
  let fixture: ComponentFixture<StockShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
