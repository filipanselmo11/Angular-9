import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RikiComponent } from './riki.component';

describe('RikiComponent', () => {
  let component: RikiComponent;
  let fixture: ComponentFixture<RikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RikiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
