import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindrangerComponent } from './windranger.component';

describe('WindrangerComponent', () => {
  let component: WindrangerComponent;
  let fixture: ComponentFixture<WindrangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindrangerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WindrangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
