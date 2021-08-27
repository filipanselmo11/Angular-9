import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkkoComponent } from './ekko.component';

describe('EkkoComponent', () => {
  let component: EkkoComponent;
  let fixture: ComponentFixture<EkkoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EkkoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EkkoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
