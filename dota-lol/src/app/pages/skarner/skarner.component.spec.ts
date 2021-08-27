import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkarnerComponent } from './skarner.component';

describe('SkarnerComponent', () => {
  let component: SkarnerComponent;
  let fixture: ComponentFixture<SkarnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkarnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkarnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
