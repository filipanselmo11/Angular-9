import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisruptorComponent } from './disruptor.component';

describe('DisruptorComponent', () => {
  let component: DisruptorComponent;
  let fixture: ComponentFixture<DisruptorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisruptorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisruptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
