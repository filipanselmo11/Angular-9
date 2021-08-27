import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrianaComponent } from './oriana.component';

describe('OrianaComponent', () => {
  let component: OrianaComponent;
  let fixture: ComponentFixture<OrianaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrianaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrianaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
