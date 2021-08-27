import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JannaComponent } from './janna.component';

describe('JannaComponent', () => {
  let component: JannaComponent;
  let fixture: ComponentFixture<JannaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JannaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JannaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
