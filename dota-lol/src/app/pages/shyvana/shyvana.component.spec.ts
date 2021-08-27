import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShyvanaComponent } from './shyvana.component';

describe('ShyvanaComponent', () => {
  let component: ShyvanaComponent;
  let fixture: ComponentFixture<ShyvanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShyvanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShyvanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
