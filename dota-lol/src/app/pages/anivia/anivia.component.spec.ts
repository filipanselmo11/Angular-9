import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AniviaComponent } from './anivia.component';

describe('AniviaComponent', () => {
  let component: AniviaComponent;
  let fixture: ComponentFixture<AniviaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AniviaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AniviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
