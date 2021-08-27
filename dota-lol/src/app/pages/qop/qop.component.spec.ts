import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QopComponent } from './qop.component';

describe('QopComponent', () => {
  let component: QopComponent;
  let fixture: ComponentFixture<QopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
