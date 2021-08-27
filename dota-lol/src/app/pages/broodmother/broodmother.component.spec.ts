import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroodmotherComponent } from './broodmother.component';

describe('BroodmotherComponent', () => {
  let component: BroodmotherComponent;
  let fixture: ComponentFixture<BroodmotherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BroodmotherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BroodmotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
