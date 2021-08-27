import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NecrophosComponent } from './necrophos.component';

describe('NecrophosComponent', () => {
  let component: NecrophosComponent;
  let fixture: ComponentFixture<NecrophosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NecrophosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NecrophosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
