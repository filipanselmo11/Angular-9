import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KindredComponent } from './kindred.component';

describe('KindredComponent', () => {
  let component: KindredComponent;
  let fixture: ComponentFixture<KindredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KindredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KindredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
