import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenomancerComponent } from './venomancer.component';

describe('VenomancerComponent', () => {
  let component: VenomancerComponent;
  let fixture: ComponentFixture<VenomancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenomancerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenomancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
