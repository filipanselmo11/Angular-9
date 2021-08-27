import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AurelionsolComponent } from './aurelionsol.component';

describe('AurelionsolComponent', () => {
  let component: AurelionsolComponent;
  let fixture: ComponentFixture<AurelionsolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AurelionsolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AurelionsolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
