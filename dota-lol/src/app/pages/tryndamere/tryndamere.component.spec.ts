import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryndamereComponent } from './tryndamere.component';

describe('TryndamereComponent', () => {
  let component: TryndamereComponent;
  let fixture: ComponentFixture<TryndamereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TryndamereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TryndamereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
