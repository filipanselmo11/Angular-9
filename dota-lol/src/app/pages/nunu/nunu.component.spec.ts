import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NunuComponent } from './nunu.component';

describe('NunuComponent', () => {
  let component: NunuComponent;
  let fixture: ComponentFixture<NunuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NunuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NunuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
