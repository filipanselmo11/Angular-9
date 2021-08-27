import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NyxassassinComponent } from './nyxassassin.component';

describe('NyxassassinComponent', () => {
  let component: NyxassassinComponent;
  let fixture: ComponentFixture<NyxassassinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NyxassassinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NyxassassinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
