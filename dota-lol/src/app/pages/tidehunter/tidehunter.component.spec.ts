import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TidehunterComponent } from './tidehunter.component';

describe('TidehunterComponent', () => {
  let component: TidehunterComponent;
  let fixture: ComponentFixture<TidehunterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TidehunterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TidehunterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
