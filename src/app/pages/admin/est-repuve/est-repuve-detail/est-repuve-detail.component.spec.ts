import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstRepuveDetailComponent } from './est-repuve-detail.component';

describe('EstRepuveDetailComponent', () => {
  let component: EstRepuveDetailComponent;
  let fixture: ComponentFixture<EstRepuveDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstRepuveDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstRepuveDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
