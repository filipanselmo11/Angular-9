import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReksaiComponent } from './reksai.component';

describe('ReksaiComponent', () => {
  let component: ReksaiComponent;
  let fixture: ComponentFixture<ReksaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReksaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReksaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
