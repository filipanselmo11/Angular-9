import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DravenComponent } from './draven.component';

describe('DravenComponent', () => {
  let component: DravenComponent;
  let fixture: ComponentFixture<DravenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DravenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DravenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
