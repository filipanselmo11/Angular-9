import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChogathComponent } from './chogath.component';

describe('ChogathComponent', () => {
  let component: ChogathComponent;
  let fixture: ComponentFixture<ChogathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChogathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChogathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
