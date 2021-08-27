import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowdemonComponent } from './shadowdemon.component';

describe('ShadowdemonComponent', () => {
  let component: ShadowdemonComponent;
  let fixture: ComponentFixture<ShadowdemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadowdemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowdemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
