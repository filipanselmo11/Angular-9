import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StormspiritComponent } from './stormspirit.component';

describe('StormspiritComponent', () => {
  let component: StormspiritComponent;
  let fixture: ComponentFixture<StormspiritComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StormspiritComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StormspiritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
