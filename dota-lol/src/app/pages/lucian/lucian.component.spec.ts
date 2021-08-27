import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LucianComponent } from './lucian.component';

describe('LucianComponent', () => {
  let component: LucianComponent;
  let fixture: ComponentFixture<LucianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LucianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LucianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
