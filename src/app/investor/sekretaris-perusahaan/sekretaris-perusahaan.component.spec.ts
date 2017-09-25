import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SekretarisPerusahaanComponent } from './sekretaris-perusahaan.component';

describe('SekretarisPerusahaanComponent', () => {
  let component: SekretarisPerusahaanComponent;
  let fixture: ComponentFixture<SekretarisPerusahaanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SekretarisPerusahaanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SekretarisPerusahaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
