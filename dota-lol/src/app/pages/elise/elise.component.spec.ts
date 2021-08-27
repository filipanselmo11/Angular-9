import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliseComponent } from './elise.component';

describe('EliseComponent', () => {
  let component: EliseComponent;
  let fixture: ComponentFixture<EliseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
