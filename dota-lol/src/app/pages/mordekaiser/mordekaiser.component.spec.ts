import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MordekaiserComponent } from './mordekaiser.component';

describe('MordekaiserComponent', () => {
  let component: MordekaiserComponent;
  let fixture: ComponentFixture<MordekaiserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MordekaiserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MordekaiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
