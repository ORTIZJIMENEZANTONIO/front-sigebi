import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstRepuveListComponent } from './est-repuve-list.component';

describe('EstRepuveListComponent', () => {
  let component: EstRepuveListComponent;
  let fixture: ComponentFixture<EstRepuveListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstRepuveListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstRepuveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
