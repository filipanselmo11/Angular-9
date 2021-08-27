import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarwickComponent } from './warwick.component';

describe('WarwickComponent', () => {
  let component: WarwickComponent;
  let fixture: ComponentFixture<WarwickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarwickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarwickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
