import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzirComponent } from './azir.component';

describe('AzirComponent', () => {
  let component: AzirComponent;
  let fixture: ComponentFixture<AzirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AzirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AzirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
