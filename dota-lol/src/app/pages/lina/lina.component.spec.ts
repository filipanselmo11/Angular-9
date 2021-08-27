import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinaComponent } from './lina.component';

describe('LinaComponent', () => {
  let component: LinaComponent;
  let fixture: ComponentFixture<LinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
