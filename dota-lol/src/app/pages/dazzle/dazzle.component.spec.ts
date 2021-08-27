import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DazzleComponent } from './dazzle.component';

describe('DazzleComponent', () => {
  let component: DazzleComponent;
  let fixture: ComponentFixture<DazzleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DazzleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DazzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
