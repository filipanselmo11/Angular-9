import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YasuoComponent } from './yasuo.component';

describe('YasuoComponent', () => {
  let component: YasuoComponent;
  let fixture: ComponentFixture<YasuoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YasuoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YasuoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
