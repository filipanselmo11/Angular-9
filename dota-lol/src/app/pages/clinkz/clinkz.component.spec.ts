import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinkzComponent } from './clinkz.component';

describe('ClinkzComponent', () => {
  let component: ClinkzComponent;
  let fixture: ComponentFixture<ClinkzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinkzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinkzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
