import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinterwyvernComponent } from './winterwyvern.component';

describe('WinterwyvernComponent', () => {
  let component: WinterwyvernComponent;
  let fixture: ComponentFixture<WinterwyvernComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinterwyvernComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinterwyvernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
