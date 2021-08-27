import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrmundoComponent } from './drmundo.component';

describe('DrmundoComponent', () => {
  let component: DrmundoComponent;
  let fixture: ComponentFixture<DrmundoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrmundoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrmundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
