import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorkiComponent } from './corki.component';

describe('CorkiComponent', () => {
  let component: CorkiComponent;
  let fixture: ComponentFixture<CorkiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorkiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
