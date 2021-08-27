import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmumuComponent } from './amumu.component';

describe('AmumuComponent', () => {
  let component: AmumuComponent;
  let fixture: ComponentFixture<AmumuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmumuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmumuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
