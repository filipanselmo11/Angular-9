import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlistarComponent } from './alistar.component';

describe('AlistarComponent', () => {
  let component: AlistarComponent;
  let fixture: ComponentFixture<AlistarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlistarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlistarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
