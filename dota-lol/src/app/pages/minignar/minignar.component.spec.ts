import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinignarComponent } from './minignar.component';

describe('MinignarComponent', () => {
  let component: MinignarComponent;
  let fixture: ComponentFixture<MinignarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinignarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinignarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
