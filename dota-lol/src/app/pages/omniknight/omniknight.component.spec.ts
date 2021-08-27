import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmniknightComponent } from './omniknight.component';

describe('OmniknightComponent', () => {
  let component: OmniknightComponent;
  let fixture: ComponentFixture<OmniknightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmniknightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OmniknightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
