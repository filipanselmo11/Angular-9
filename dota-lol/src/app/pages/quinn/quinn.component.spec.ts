import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuinnComponent } from './quinn.component';

describe('QuinnComponent', () => {
  let component: QuinnComponent;
  let fixture: ComponentFixture<QuinnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuinnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuinnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
