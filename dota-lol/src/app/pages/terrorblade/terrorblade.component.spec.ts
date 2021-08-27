import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrorbladeComponent } from './terrorblade.component';

describe('TerrorbladeComponent', () => {
  let component: TerrorbladeComponent;
  let fixture: ComponentFixture<TerrorbladeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerrorbladeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrorbladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
