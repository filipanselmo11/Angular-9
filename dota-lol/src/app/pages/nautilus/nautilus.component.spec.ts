import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NautilusComponent } from './nautilus.component';

describe('NautilusComponent', () => {
  let component: NautilusComponent;
  let fixture: ComponentFixture<NautilusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NautilusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NautilusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
