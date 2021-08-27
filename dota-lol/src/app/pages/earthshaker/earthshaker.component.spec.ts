import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthshakerComponent } from './earthshaker.component';

describe('EarthshakerComponent', () => {
  let component: EarthshakerComponent;
  let fixture: ComponentFixture<EarthshakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarthshakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarthshakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
