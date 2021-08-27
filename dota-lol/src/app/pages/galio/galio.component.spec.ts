import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalioComponent } from './galio.component';

describe('GalioComponent', () => {
  let component: GalioComponent;
  let fixture: ComponentFixture<GalioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
