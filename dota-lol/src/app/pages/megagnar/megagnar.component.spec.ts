import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegagnarComponent } from './megagnar.component';

describe('MegagnarComponent', () => {
  let component: MegagnarComponent;
  let fixture: ComponentFixture<MegagnarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MegagnarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MegagnarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
