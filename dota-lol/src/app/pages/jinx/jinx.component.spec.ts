import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JinxComponent } from './jinx.component';

describe('JinxComponent', () => {
  let component: JinxComponent;
  let fixture: ComponentFixture<JinxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JinxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JinxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
