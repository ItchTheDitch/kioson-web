import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorInformationComponent } from './investor-information.component';

describe('InvestorInformationComponent', () => {
  let component: InvestorInformationComponent;
  let fixture: ComponentFixture<InvestorInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
