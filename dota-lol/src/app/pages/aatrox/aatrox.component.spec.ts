import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AatroxComponent } from './aatrox.component';

describe('AatroxComponent', () => {
  let component: AatroxComponent;
  let fixture: ComponentFixture<AatroxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AatroxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AatroxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
