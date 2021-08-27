import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkywrathmageComponent } from './skywrathmage.component';

describe('SkywrathmageComponent', () => {
  let component: SkywrathmageComponent;
  let fixture: ComponentFixture<SkywrathmageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkywrathmageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkywrathmageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
