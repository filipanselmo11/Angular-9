import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RivenComponent } from './riven.component';

describe('RivenComponent', () => {
  let component: RivenComponent;
  let fixture: ComponentFixture<RivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RivenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
