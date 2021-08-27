import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodseekerComponent } from './bloodseeker.component';

describe('BloodseekerComponent', () => {
  let component: BloodseekerComponent;
  let fixture: ComponentFixture<BloodseekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodseekerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodseekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
