import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KassadinComponent } from './kassadin.component';

describe('KassadinComponent', () => {
  let component: KassadinComponent;
  let fixture: ComponentFixture<KassadinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KassadinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KassadinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
