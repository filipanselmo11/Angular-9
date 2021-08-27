import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaricComponent } from './taric.component';

describe('TaricComponent', () => {
  let component: TaricComponent;
  let fixture: ComponentFixture<TaricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
