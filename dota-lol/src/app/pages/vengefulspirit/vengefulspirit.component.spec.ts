import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VengefulspiritComponent } from './vengefulspirit.component';

describe('VengefulspiritComponent', () => {
  let component: VengefulspiritComponent;
  let fixture: ComponentFixture<VengefulspiritComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VengefulspiritComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VengefulspiritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
