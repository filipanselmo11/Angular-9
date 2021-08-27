import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeigarComponent } from './veigar.component';

describe('VeigarComponent', () => {
  let component: VeigarComponent;
  let fixture: ComponentFixture<VeigarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeigarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeigarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
