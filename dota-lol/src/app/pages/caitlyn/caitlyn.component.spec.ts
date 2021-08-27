import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaitlynComponent } from './caitlyn.component';

describe('CaitlynComponent', () => {
  let component: CaitlynComponent;
  let fixture: ComponentFixture<CaitlynComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaitlynComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaitlynComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
