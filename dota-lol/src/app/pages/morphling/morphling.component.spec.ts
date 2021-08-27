import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorphlingComponent } from './morphling.component';

describe('MorphlingComponent', () => {
  let component: MorphlingComponent;
  let fixture: ComponentFixture<MorphlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorphlingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MorphlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
