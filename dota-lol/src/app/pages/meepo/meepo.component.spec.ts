import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeepoComponent } from './meepo.component';

describe('MeepoComponent', () => {
  let component: MeepoComponent;
  let fixture: ComponentFixture<MeepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeepoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
