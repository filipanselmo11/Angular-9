import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KayleComponent } from './kayle.component';

describe('KayleComponent', () => {
  let component: KayleComponent;
  let fixture: ComponentFixture<KayleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KayleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KayleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
