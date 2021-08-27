import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeesinComponent } from './leesin.component';

describe('LeesinComponent', () => {
  let component: LeesinComponent;
  let fixture: ComponentFixture<LeesinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeesinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeesinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
