import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XinzhaoComponent } from './xinzhao.component';

describe('XinzhaoComponent', () => {
  let component: XinzhaoComponent;
  let fixture: ComponentFixture<XinzhaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XinzhaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XinzhaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
