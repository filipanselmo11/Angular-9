import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaliyahComponent } from './taliyah.component';

describe('TaliyahComponent', () => {
  let component: TaliyahComponent;
  let fixture: ComponentFixture<TaliyahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaliyahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaliyahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
