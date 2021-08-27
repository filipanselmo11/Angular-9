import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NidaleeComponent } from './nidalee.component';

describe('NidaleeComponent', () => {
  let component: NidaleeComponent;
  let fixture: ComponentFixture<NidaleeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NidaleeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NidaleeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
