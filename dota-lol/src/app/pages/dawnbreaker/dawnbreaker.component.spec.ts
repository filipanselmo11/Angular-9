import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DawnbreakerComponent } from './dawnbreaker.component';

describe('DawnbreakerComponent', () => {
  let component: DawnbreakerComponent;
  let fixture: ComponentFixture<DawnbreakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DawnbreakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DawnbreakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
