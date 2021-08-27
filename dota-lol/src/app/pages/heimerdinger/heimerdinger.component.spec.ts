import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeimerdingerComponent } from './heimerdinger.component';

describe('HeimerdingerComponent', () => {
  let component: HeimerdingerComponent;
  let fixture: ComponentFixture<HeimerdingerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeimerdingerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeimerdingerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
