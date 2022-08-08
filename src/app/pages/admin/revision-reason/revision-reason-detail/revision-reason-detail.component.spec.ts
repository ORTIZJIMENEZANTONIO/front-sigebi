import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionReasonDetailComponent } from './revision-reason-detail.component';

describe('RevisionReasonDetailComponent', () => {
  let component: RevisionReasonDetailComponent;
  let fixture: ComponentFixture<RevisionReasonDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisionReasonDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisionReasonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
