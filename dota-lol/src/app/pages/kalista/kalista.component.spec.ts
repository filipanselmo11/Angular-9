import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KalistaComponent } from './kalista.component';

describe('KalistaComponent', () => {
  let component: KalistaComponent;
  let fixture: ComponentFixture<KalistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KalistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KalistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
