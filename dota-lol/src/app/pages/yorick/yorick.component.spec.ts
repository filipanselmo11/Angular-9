import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YorickComponent } from './yorick.component';

describe('YorickComponent', () => {
  let component: YorickComponent;
  let fixture: ComponentFixture<YorickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YorickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YorickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
