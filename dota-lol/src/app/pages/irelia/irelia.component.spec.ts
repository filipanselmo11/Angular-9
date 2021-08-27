import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IreliaComponent } from './irelia.component';

describe('IreliaComponent', () => {
  let component: IreliaComponent;
  let fixture: ComponentFixture<IreliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IreliaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IreliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
