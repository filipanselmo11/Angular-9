import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewmasterComponent } from './brewmaster.component';

describe('BrewmasterComponent', () => {
  let component: BrewmasterComponent;
  let fixture: ComponentFixture<BrewmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrewmasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
