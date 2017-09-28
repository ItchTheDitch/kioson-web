import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorPageComponent } from './investor-page.component';

describe('InvestorPageComponent', () => {
  let component: InvestorPageComponent;
  let fixture: ComponentFixture<InvestorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
