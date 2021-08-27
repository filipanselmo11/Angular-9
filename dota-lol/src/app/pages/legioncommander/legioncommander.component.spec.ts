import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegioncommanderComponent } from './legioncommander.component';

describe('LegioncommanderComponent', () => {
  let component: LegioncommanderComponent;
  let fixture: ComponentFixture<LegioncommanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegioncommanderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegioncommanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
