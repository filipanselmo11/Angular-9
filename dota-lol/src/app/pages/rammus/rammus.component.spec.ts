import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RammusComponent } from './rammus.component';

describe('RammusComponent', () => {
  let component: RammusComponent;
  let fixture: ComponentFixture<RammusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RammusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RammusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
