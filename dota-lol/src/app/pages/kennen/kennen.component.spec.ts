import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KennenComponent } from './kennen.component';

describe('KennenComponent', () => {
  let component: KennenComponent;
  let fixture: ComponentFixture<KennenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KennenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KennenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
