import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MalphiteComponent } from './malphite.component';

describe('MalphiteComponent', () => {
  let component: MalphiteComponent;
  let fixture: ComponentFixture<MalphiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MalphiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MalphiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
