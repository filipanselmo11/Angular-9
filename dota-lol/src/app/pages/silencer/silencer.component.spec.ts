import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilencerComponent } from './silencer.component';

describe('SilencerComponent', () => {
  let component: SilencerComponent;
  let fixture: ComponentFixture<SilencerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SilencerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SilencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
