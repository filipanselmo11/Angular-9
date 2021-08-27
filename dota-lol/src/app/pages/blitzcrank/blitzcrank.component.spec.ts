import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlitzcrankComponent } from './blitzcrank.component';

describe('BlitzcrankComponent', () => {
  let component: BlitzcrankComponent;
  let fixture: ComponentFixture<BlitzcrankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlitzcrankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlitzcrankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
