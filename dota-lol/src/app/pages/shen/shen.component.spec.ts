import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShenComponent } from './shen.component';

describe('ShenComponent', () => {
  let component: ShenComponent;
  let fixture: ComponentFixture<ShenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
