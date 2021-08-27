import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthspiritComponent } from './earthspirit.component';

describe('EarthspiritComponent', () => {
  let component: EarthspiritComponent;
  let fixture: ComponentFixture<EarthspiritComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarthspiritComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarthspiritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
