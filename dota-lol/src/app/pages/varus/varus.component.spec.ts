import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarusComponent } from './varus.component';

describe('VarusComponent', () => {
  let component: VarusComponent;
  let fixture: ComponentFixture<VarusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VarusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
