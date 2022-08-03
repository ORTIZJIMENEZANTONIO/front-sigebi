import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailboxStatusListComponent } from './mailbox-status-list.component';

describe('MailboxStatusListComponent', () => {
  let component: MailboxStatusListComponent;
  let fixture: ComponentFixture<MailboxStatusListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailboxStatusListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailboxStatusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
