import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LissandraComponent } from './lissandra.component';

describe('LissandraComponent', () => {
  let component: LissandraComponent;
  let fixture: ComponentFixture<LissandraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LissandraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LissandraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
