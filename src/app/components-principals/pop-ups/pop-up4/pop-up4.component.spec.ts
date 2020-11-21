import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUp4Component } from './pop-up4.component';

describe('PopUp4Component', () => {
  let component: PopUp4Component;
  let fixture: ComponentFixture<PopUp4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUp4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUp4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
