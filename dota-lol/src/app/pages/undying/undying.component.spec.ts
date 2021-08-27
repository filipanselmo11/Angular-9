import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndyingComponent } from './undying.component';

describe('UndyingComponent', () => {
  let component: UndyingComponent;
  let fixture: ComponentFixture<UndyingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UndyingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UndyingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
