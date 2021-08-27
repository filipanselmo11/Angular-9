import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenektonComponent } from './renekton.component';

describe('RenektonComponent', () => {
  let component: RenektonComponent;
  let fixture: ComponentFixture<RenektonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenektonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenektonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
