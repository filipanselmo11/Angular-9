import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuluComponent } from './lulu.component';

describe('LuluComponent', () => {
  let component: LuluComponent;
  let fixture: ComponentFixture<LuluComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuluComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
