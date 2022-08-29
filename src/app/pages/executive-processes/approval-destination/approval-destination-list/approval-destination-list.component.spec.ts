import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalDestinationListComponent } from './approval-destination-list.component';

describe('ApprovalDestinationListComponent', () => {
  let component: ApprovalDestinationListComponent;
  let fixture: ComponentFixture<ApprovalDestinationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalDestinationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalDestinationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
