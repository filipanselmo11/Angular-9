import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DariusComponent } from './darius.component';

describe('DariusComponent', () => {
  let component: DariusComponent;
  let fixture: ComponentFixture<DariusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DariusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DariusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
