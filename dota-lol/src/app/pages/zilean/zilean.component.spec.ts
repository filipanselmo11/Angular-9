import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZileanComponent } from './zilean.component';

describe('ZileanComponent', () => {
  let component: ZileanComponent;
  let fixture: ComponentFixture<ZileanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZileanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZileanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
