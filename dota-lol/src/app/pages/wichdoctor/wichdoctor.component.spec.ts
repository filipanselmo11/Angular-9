import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WichdoctorComponent } from './wichdoctor.component';

describe('WichdoctorComponent', () => {
  let component: WichdoctorComponent;
  let fixture: ComponentFixture<WichdoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WichdoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WichdoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
