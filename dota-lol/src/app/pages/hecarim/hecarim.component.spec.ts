import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HecarimComponent } from './hecarim.component';

describe('HecarimComponent', () => {
  let component: HecarimComponent;
  let fixture: ComponentFixture<HecarimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HecarimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HecarimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
