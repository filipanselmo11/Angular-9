import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MalzaharComponent } from './malzahar.component';

describe('MalzaharComponent', () => {
  let component: MalzaharComponent;
  let fixture: ComponentFixture<MalzaharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MalzaharComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MalzaharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
