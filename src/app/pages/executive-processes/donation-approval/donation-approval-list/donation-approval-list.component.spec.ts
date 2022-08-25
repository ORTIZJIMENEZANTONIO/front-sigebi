import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationApprovalListComponent } from './donation-approval-list.component';

describe('DonationApprovalListComponent', () => {
  let component: DonationApprovalListComponent;
  let fixture: ComponentFixture<DonationApprovalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationApprovalListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationApprovalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
