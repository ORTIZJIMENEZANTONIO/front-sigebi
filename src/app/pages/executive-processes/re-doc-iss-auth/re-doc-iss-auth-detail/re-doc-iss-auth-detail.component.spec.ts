import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReDocIssAuthDetailComponent } from './re-doc-iss-auth-detail.component';

describe('ReDocIssAuthDetailComponent', () => {
  let component: ReDocIssAuthDetailComponent;
  let fixture: ComponentFixture<ReDocIssAuthDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReDocIssAuthDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReDocIssAuthDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
