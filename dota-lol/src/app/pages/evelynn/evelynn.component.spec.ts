import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvelynnComponent } from './evelynn.component';

describe('EvelynnComponent', () => {
  let component: EvelynnComponent;
  let fixture: ComponentFixture<EvelynnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvelynnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvelynnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
