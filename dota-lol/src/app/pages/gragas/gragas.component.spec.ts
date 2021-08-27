import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GragasComponent } from './gragas.component';

describe('GragasComponent', () => {
  let component: GragasComponent;
  let fixture: ComponentFixture<GragasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GragasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GragasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
