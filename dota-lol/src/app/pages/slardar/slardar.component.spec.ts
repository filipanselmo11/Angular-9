import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlardarComponent } from './slardar.component';

describe('SlardarComponent', () => {
  let component: SlardarComponent;
  let fixture: ComponentFixture<SlardarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlardarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlardarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
