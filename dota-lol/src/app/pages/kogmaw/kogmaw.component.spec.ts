import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KogmawComponent } from './kogmaw.component';

describe('KogmawComponent', () => {
  let component: KogmawComponent;
  let fixture: ComponentFixture<KogmawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KogmawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KogmawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
