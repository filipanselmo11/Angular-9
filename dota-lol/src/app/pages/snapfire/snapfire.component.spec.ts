import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapfireComponent } from './snapfire.component';

describe('SnapfireComponent', () => {
  let component: SnapfireComponent;
  let fixture: ComponentFixture<SnapfireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnapfireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnapfireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
