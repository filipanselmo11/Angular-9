import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EldertitanComponent } from './eldertitan.component';

describe('EldertitanComponent', () => {
  let component: EldertitanComponent;
  let fixture: ComponentFixture<EldertitanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EldertitanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EldertitanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
