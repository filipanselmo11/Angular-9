import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BristlebackComponent } from './bristleback.component';

describe('BristlebackComponent', () => {
  let component: BristlebackComponent;
  let fixture: ComponentFixture<BristlebackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BristlebackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BristlebackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
