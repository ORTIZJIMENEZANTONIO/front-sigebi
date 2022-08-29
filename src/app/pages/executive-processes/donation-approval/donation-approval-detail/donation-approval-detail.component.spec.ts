import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationApprovalDetailComponent } from './donation-approval-detail.component';

describe('DonationApprovalDetailComponent', () => {
  let component: DonationApprovalDetailComponent;
  let fixture: ComponentFixture<DonationApprovalDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationApprovalDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationApprovalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
