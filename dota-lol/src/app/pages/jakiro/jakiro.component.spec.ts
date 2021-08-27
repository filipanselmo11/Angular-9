import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JakiroComponent } from './jakiro.component';

describe('JakiroComponent', () => {
  let component: JakiroComponent;
  let fixture: ComponentFixture<JakiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JakiroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JakiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
