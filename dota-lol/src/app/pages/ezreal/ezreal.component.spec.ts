import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EzrealComponent } from './ezreal.component';

describe('EzrealComponent', () => {
  let component: EzrealComponent;
  let fixture: ComponentFixture<EzrealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EzrealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EzrealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
