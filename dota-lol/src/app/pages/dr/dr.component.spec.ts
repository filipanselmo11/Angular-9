import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrComponent } from './dr.component';

describe('DrComponent', () => {
  let component: DrComponent;
  let fixture: ComponentFixture<DrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
