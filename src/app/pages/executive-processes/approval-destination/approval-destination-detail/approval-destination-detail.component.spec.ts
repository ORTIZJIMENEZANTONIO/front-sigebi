import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalDestinationDetailComponent } from './approval-destination-detail.component';

describe('ApprovalDestinationDetailComponent', () => {
  let component: ApprovalDestinationDetailComponent;
  let fixture: ComponentFixture<ApprovalDestinationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalDestinationDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalDestinationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
