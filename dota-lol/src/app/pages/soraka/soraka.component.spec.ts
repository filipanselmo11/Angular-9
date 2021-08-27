import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorakaComponent } from './soraka.component';

describe('SorakaComponent', () => {
  let component: SorakaComponent;
  let fixture: ComponentFixture<SorakaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SorakaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SorakaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
