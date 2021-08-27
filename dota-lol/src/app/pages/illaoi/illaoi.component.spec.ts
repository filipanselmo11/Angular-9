import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IllaoiComponent } from './illaoi.component';

describe('IllaoiComponent', () => {
  let component: IllaoiComponent;
  let fixture: ComponentFixture<IllaoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IllaoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IllaoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
