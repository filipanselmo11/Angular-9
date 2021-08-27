import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SivirComponent } from './sivir.component';

describe('SivirComponent', () => {
  let component: SivirComponent;
  let fixture: ComponentFixture<SivirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SivirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SivirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
