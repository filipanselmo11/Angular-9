import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhazixComponent } from './khazix.component';

describe('KhazixComponent', () => {
  let component: KhazixComponent;
  let fixture: ComponentFixture<KhazixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhazixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KhazixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
