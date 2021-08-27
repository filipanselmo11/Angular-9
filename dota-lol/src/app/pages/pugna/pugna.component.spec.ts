import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PugnaComponent } from './pugna.component';

describe('PugnaComponent', () => {
  let component: PugnaComponent;
  let fixture: ComponentFixture<PugnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PugnaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PugnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
