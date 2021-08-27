import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GangplankComponent } from './gangplank.component';

describe('GangplankComponent', () => {
  let component: GangplankComponent;
  let fixture: ComponentFixture<GangplankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GangplankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GangplankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
