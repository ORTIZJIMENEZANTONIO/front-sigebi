import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeductiveVerificationDetailComponent } from './deductive-verification-detail.component';

describe('DeductiveVerificationDetailComponent', () => {
  let component: DeductiveVerificationDetailComponent;
  let fixture: ComponentFixture<DeductiveVerificationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeductiveVerificationDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeductiveVerificationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
