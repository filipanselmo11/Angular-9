import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RengarComponent } from './rengar.component';

describe('RengarComponent', () => {
  let component: RengarComponent;
  let fixture: ComponentFixture<RengarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RengarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RengarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
