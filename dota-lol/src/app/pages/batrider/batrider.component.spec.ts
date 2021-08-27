import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatriderComponent } from './batrider.component';

describe('BatriderComponent', () => {
  let component: BatriderComponent;
  let fixture: ComponentFixture<BatriderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatriderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatriderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
