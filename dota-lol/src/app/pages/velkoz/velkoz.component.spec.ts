import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelkozComponent } from './velkoz.component';

describe('VelkozComponent', () => {
  let component: VelkozComponent;
  let fixture: ComponentFixture<VelkozComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VelkozComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VelkozComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
