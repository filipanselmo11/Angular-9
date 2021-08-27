import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockwerkComponent } from './clockwerk.component';

describe('ClockwerkComponent', () => {
  let component: ClockwerkComponent;
  let fixture: ComponentFixture<ClockwerkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClockwerkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockwerkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
