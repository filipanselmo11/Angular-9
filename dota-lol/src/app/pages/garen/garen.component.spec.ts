import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarenComponent } from './garen.component';

describe('GarenComponent', () => {
  let component: GarenComponent;
  let fixture: ComponentFixture<GarenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GarenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GarenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
