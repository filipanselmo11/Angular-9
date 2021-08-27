import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuggernautComponent } from './juggernaut.component';

describe('JuggernautComponent', () => {
  let component: JuggernautComponent;
  let fixture: ComponentFixture<JuggernautComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuggernautComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuggernautComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
