import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RyzeComponent } from './ryze.component';

describe('RyzeComponent', () => {
  let component: RyzeComponent;
  let fixture: ComponentFixture<RyzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RyzeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RyzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
