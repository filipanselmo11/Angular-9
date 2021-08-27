import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VayneComponent } from './vayne.component';

describe('VayneComponent', () => {
  let component: VayneComponent;
  let fixture: ComponentFixture<VayneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VayneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VayneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
