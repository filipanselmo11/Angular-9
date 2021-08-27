import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeshracComponent } from './leshrac.component';

describe('LeshracComponent', () => {
  let component: LeshracComponent;
  let fixture: ComponentFixture<LeshracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeshracComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeshracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
