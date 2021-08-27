import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdyrComponent } from './udyr.component';

describe('UdyrComponent', () => {
  let component: UdyrComponent;
  let fixture: ComponentFixture<UdyrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdyrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdyrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
