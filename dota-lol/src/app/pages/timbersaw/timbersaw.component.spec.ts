import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimbersawComponent } from './timbersaw.component';

describe('TimbersawComponent', () => {
  let component: TimbersawComponent;
  let fixture: ComponentFixture<TimbersawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimbersawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimbersawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
