import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusTransferDetailComponent } from './status-transfer-detail.component';

describe('StatusTransferDetailComponent', () => {
  let component: StatusTransferDetailComponent;
  let fixture: ComponentFixture<StatusTransferDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusTransferDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusTransferDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
