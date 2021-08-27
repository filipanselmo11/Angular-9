import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeblancComponent } from './leblanc.component';

describe('LeblancComponent', () => {
  let component: LeblancComponent;
  let fixture: ComponentFixture<LeblancComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeblancComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeblancComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
