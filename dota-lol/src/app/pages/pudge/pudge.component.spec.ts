import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PudgeComponent } from './pudge.component';

describe('PudgeComponent', () => {
  let component: PudgeComponent;
  let fixture: ComponentFixture<PudgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PudgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PudgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
