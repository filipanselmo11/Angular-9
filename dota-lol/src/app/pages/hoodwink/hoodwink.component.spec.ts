import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoodwinkComponent } from './hoodwink.component';

describe('HoodwinkComponent', () => {
  let component: HoodwinkComponent;
  let fixture: ComponentFixture<HoodwinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoodwinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoodwinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
