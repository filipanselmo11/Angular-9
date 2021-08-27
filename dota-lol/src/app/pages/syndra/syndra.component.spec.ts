import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyndraComponent } from './syndra.component';

describe('SyndraComponent', () => {
  let component: SyndraComponent;
  let fixture: ComponentFixture<SyndraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyndraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SyndraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
