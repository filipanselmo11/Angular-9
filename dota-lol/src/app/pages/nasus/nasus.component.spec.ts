import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasusComponent } from './nasus.component';

describe('NasusComponent', () => {
  let component: NasusComponent;
  let fixture: ComponentFixture<NasusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NasusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NasusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
