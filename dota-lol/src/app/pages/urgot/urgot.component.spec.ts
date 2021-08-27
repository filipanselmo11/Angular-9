import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrgotComponent } from './urgot.component';

describe('UrgotComponent', () => {
  let component: UrgotComponent;
  let fixture: ComponentFixture<UrgotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrgotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
