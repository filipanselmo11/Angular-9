import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwainComponent } from './swain.component';

describe('SwainComponent', () => {
  let component: SwainComponent;
  let fixture: ComponentFixture<SwainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
