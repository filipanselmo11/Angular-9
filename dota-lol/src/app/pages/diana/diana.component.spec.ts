import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DianaComponent } from './diana.component';

describe('DianaComponent', () => {
  let component: DianaComponent;
  let fixture: ComponentFixture<DianaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DianaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DianaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
