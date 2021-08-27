import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CassiopeiaComponent } from './cassiopeia.component';

describe('CassiopeiaComponent', () => {
  let component: CassiopeiaComponent;
  let fixture: ComponentFixture<CassiopeiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CassiopeiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CassiopeiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
