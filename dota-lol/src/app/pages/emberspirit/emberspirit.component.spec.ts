import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmberspiritComponent } from './emberspirit.component';

describe('EmberspiritComponent', () => {
  let component: EmberspiritComponent;
  let fixture: ComponentFixture<EmberspiritComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmberspiritComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmberspiritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
