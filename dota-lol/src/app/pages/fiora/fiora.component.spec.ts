import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FioraComponent } from './fiora.component';

describe('FioraComponent', () => {
  let component: FioraComponent;
  let fixture: ComponentFixture<FioraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FioraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FioraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
