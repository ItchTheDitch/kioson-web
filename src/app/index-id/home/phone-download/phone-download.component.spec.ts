import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneDownloadComponent } from './phone-download.component';

describe('PhoneDownloadComponent', () => {
  let component: PhoneDownloadComponent;
  let fixture: ComponentFixture<PhoneDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
