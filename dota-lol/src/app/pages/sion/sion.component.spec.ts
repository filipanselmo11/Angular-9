import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SionComponent } from './sion.component';

describe('SionComponent', () => {
  let component: SionComponent;
  let fixture: ComponentFixture<SionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
