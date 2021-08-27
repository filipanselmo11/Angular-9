import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbadonComponent } from './abbadon.component';

describe('AbbadonComponent', () => {
  let component: AbbadonComponent;
  let fixture: ComponentFixture<AbbadonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbbadonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbbadonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
