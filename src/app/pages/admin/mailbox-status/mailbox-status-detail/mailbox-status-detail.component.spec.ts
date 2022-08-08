import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailboxStatusDetailComponent } from './mailbox-status-detail.component';

describe('MailboxStatusDetailComponent', () => {
  let component: MailboxStatusDetailComponent;
  let fixture: ComponentFixture<MailboxStatusDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailboxStatusDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailboxStatusDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
