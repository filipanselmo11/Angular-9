import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NagasirenComponent } from './nagasiren.component';

describe('NagasirenComponent', () => {
  let component: NagasirenComponent;
  let fixture: ComponentFixture<NagasirenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NagasirenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NagasirenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
