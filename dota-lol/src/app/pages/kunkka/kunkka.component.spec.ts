import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KunkkaComponent } from './kunkka.component';

describe('KunkkaComponent', () => {
  let component: KunkkaComponent;
  let fixture: ComponentFixture<KunkkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KunkkaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KunkkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
