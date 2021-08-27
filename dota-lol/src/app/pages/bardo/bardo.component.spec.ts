import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BardoComponent } from './bardo.component';

describe('BardoComponent', () => {
  let component: BardoComponent;
  let fixture: ComponentFixture<BardoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BardoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BardoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
