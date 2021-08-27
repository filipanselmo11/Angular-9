import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingedComponent } from './singed.component';

describe('SingedComponent', () => {
  let component: SingedComponent;
  let fixture: ComponentFixture<SingedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
