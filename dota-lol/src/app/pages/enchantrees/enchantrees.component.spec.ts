import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnchantreesComponent } from './enchantrees.component';

describe('EnchantreesComponent', () => {
  let component: EnchantreesComponent;
  let fixture: ComponentFixture<EnchantreesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnchantreesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnchantreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
