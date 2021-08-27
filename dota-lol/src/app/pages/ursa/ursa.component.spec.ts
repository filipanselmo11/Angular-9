import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrsaComponent } from './ursa.component';

describe('UrsaComponent', () => {
  let component: UrsaComponent;
  let fixture: ComponentFixture<UrsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrsaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
