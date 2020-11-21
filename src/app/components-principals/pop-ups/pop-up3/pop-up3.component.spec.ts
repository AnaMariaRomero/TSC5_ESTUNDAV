import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUp3Component } from './pop-up3.component';

describe('PopUp3Component', () => {
  let component: PopUp3Component;
  let fixture: ComponentFixture<PopUp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUp3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
