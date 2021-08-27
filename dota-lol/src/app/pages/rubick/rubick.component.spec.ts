import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubickComponent } from './rubick.component';

describe('RubickComponent', () => {
  let component: RubickComponent;
  let fixture: ComponentFixture<RubickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RubickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RubickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
