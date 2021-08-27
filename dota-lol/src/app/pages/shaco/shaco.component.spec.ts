import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShacoComponent } from './shaco.component';

describe('ShacoComponent', () => {
  let component: ShacoComponent;
  let fixture: ComponentFixture<ShacoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShacoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShacoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
