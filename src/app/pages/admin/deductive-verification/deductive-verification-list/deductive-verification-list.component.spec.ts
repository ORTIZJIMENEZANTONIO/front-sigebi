import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeductiveVerificationListComponent } from './deductive-verification-list.component';

describe('DeductiveVerificationListComponent', () => {
  let component: DeductiveVerificationListComponent;
  let fixture: ComponentFixture<DeductiveVerificationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeductiveVerificationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeductiveVerificationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
