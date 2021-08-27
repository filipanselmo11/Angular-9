import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowshamanComponent } from './shadowshaman.component';

describe('ShadowshamanComponent', () => {
  let component: ShadowshamanComponent;
  let fixture: ComponentFixture<ShadowshamanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadowshamanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowshamanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
