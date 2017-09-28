import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DewanKomisarisComponent } from './dewan-komisaris.component';

describe('DewanKomisarisComponent', () => {
  let component: DewanKomisarisComponent;
  let fixture: ComponentFixture<DewanKomisarisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DewanKomisarisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DewanKomisarisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
