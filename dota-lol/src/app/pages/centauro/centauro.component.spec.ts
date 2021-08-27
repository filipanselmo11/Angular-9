import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentauroComponent } from './centauro.component';

describe('CentauroComponent', () => {
  let component: CentauroComponent;
  let fixture: ComponentFixture<CentauroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentauroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentauroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
