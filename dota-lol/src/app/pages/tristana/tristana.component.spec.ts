import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TristanaComponent } from './tristana.component';

describe('TristanaComponent', () => {
  let component: TristanaComponent;
  let fixture: ComponentFixture<TristanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TristanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TristanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
