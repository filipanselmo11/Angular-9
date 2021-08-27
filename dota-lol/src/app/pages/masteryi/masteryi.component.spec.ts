import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasteryiComponent } from './masteryi.component';

describe('MasteryiComponent', () => {
  let component: MasteryiComponent;
  let fixture: ComponentFixture<MasteryiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasteryiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasteryiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
