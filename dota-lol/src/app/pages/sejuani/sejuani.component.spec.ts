import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SejuaniComponent } from './sejuani.component';

describe('SejuaniComponent', () => {
  let component: SejuaniComponent;
  let fixture: ComponentFixture<SejuaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SejuaniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SejuaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
