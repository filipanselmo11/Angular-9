import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XerathComponent } from './xerath.component';

describe('XerathComponent', () => {
  let component: XerathComponent;
  let fixture: ComponentFixture<XerathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XerathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XerathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
