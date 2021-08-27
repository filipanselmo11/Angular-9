import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoneComponent } from './yone.component';

describe('YoneComponent', () => {
  let component: YoneComponent;
  let fixture: ComponentFixture<YoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
