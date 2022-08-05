import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionReasonListComponent } from './revision-reason-list.component';

describe('RevisionReasonListComponent', () => {
  let component: RevisionReasonListComponent;
  let fixture: ComponentFixture<RevisionReasonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisionReasonListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisionReasonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
