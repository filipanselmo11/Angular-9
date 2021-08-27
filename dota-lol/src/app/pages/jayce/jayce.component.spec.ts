import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JayceComponent } from './jayce.component';

describe('JayceComponent', () => {
  let component: JayceComponent;
  let fixture: ComponentFixture<JayceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JayceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JayceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
