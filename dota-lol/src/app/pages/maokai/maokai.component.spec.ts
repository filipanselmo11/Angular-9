import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaokaiComponent } from './maokai.component';

describe('MaokaiComponent', () => {
  let component: MaokaiComponent;
  let fixture: ComponentFixture<MaokaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaokaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaokaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
