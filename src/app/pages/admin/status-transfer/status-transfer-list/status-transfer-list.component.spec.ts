import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusTransferListComponent } from './status-transfer-list.component';

describe('StatusTransferListComponent', () => {
  let component: StatusTransferListComponent;
  let fixture: ComponentFixture<StatusTransferListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusTransferListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusTransferListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
