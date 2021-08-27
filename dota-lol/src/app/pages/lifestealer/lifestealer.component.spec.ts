import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifestealerComponent } from './lifestealer.component';

describe('LifestealerComponent', () => {
  let component: LifestealerComponent;
  let fixture: ComponentFixture<LifestealerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifestealerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifestealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
