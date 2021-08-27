import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoidspiritComponent } from './voidspirit.component';

describe('VoidspiritComponent', () => {
  let component: VoidspiritComponent;
  let fixture: ComponentFixture<VoidspiritComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoidspiritComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoidspiritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
