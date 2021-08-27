import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlarkComponent } from './slark.component';

describe('SlarkComponent', () => {
  let component: SlarkComponent;
  let fixture: ComponentFixture<SlarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
