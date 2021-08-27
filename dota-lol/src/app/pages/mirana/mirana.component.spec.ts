import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiranaComponent } from './mirana.component';

describe('MiranaComponent', () => {
  let component: MiranaComponent;
  let fixture: ComponentFixture<MiranaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiranaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiranaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
