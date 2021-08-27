import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JarvanComponent } from './jarvan.component';

describe('JarvanComponent', () => {
  let component: JarvanComponent;
  let fixture: ComponentFixture<JarvanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JarvanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JarvanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
