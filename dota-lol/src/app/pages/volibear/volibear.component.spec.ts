import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolibearComponent } from './volibear.component';

describe('VolibearComponent', () => {
  let component: VolibearComponent;
  let fixture: ComponentFixture<VolibearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolibearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolibearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
