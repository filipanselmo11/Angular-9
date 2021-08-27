import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WukongComponent } from './wukong.component';

describe('WukongComponent', () => {
  let component: WukongComponent;
  let fixture: ComponentFixture<WukongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WukongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WukongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
