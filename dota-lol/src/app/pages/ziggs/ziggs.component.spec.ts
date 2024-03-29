import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZiggsComponent } from './ziggs.component';

describe('ZiggsComponent', () => {
  let component: ZiggsComponent;
  let fixture: ComponentFixture<ZiggsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZiggsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZiggsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
