import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeastmasterComponent } from './beastmaster.component';

describe('BeastmasterComponent', () => {
  let component: BeastmasterComponent;
  let fixture: ComponentFixture<BeastmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeastmasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeastmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
