import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideHelpComponent } from './guide-help.component';

describe('GuideHelpComponent', () => {
  let component: GuideHelpComponent;
  let fixture: ComponentFixture<GuideHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
