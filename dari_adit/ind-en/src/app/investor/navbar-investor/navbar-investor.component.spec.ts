import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarInvestorComponent } from './navbar-investor.component';

describe('NavbarInvestorComponent', () => {
  let component: NavbarInvestorComponent;
  let fixture: ComponentFixture<NavbarInvestorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarInvestorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarInvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
