import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NocturneComponent } from './nocturne.component';

describe('NocturneComponent', () => {
  let component: NocturneComponent;
  let fixture: ComponentFixture<NocturneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NocturneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NocturneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
