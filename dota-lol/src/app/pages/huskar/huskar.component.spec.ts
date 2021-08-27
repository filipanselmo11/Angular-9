import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuskarComponent } from './huskar.component';

describe('HuskarComponent', () => {
  let component: HuskarComponent;
  let fixture: ComponentFixture<HuskarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuskarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuskarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
