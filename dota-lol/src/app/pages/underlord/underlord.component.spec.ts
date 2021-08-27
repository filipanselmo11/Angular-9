import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderlordComponent } from './underlord.component';

describe('UnderlordComponent', () => {
  let component: UnderlordComponent;
  let fixture: ComponentFixture<UnderlordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderlordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderlordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
