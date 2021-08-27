import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagnusComponent } from './magnus.component';

describe('MagnusComponent', () => {
  let component: MagnusComponent;
  let fixture: ComponentFixture<MagnusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagnusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagnusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
