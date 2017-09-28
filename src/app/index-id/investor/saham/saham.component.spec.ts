import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SahamComponent } from './saham.component';

describe('SahamComponent', () => {
  let component: SahamComponent;
  let fixture: ComponentFixture<SahamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SahamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SahamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
