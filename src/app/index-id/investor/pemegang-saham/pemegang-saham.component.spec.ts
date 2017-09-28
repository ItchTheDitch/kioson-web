import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PemegangSahamComponent } from './pemegang-saham.component';

describe('PemegangSahamComponent', () => {
  let component: PemegangSahamComponent;
  let fixture: ComponentFixture<PemegangSahamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PemegangSahamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PemegangSahamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
