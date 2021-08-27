import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarthusComponent } from './karthus.component';

describe('KarthusComponent', () => {
  let component: KarthusComponent;
  let fixture: ComponentFixture<KarthusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KarthusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KarthusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
