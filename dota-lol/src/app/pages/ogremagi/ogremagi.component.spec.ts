import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OgremagiComponent } from './ogremagi.component';

describe('OgremagiComponent', () => {
  let component: OgremagiComponent;
  let fixture: ComponentFixture<OgremagiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OgremagiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OgremagiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
