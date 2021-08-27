import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JaxComponent } from './jax.component';

describe('JaxComponent', () => {
  let component: JaxComponent;
  let fixture: ComponentFixture<JaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
