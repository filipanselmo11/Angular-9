import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JhinComponent } from './jhin.component';

describe('JhinComponent', () => {
  let component: JhinComponent;
  let fixture: ComponentFixture<JhinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JhinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JhinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
