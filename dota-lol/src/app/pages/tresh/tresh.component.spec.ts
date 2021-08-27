import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreshComponent } from './tresh.component';

describe('TreshComponent', () => {
  let component: TreshComponent;
  let fixture: ComponentFixture<TreshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreshComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
