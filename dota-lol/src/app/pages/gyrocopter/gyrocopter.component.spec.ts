import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GyrocopterComponent } from './gyrocopter.component';

describe('GyrocopterComponent', () => {
  let component: GyrocopterComponent;
  let fixture: ComponentFixture<GyrocopterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GyrocopterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GyrocopterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
