import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReDocIssAuthListComponent } from './re-doc-iss-auth-list.component';

describe('ReDocIssAuthListComponent', () => {
  let component: ReDocIssAuthListComponent;
  let fixture: ComponentFixture<ReDocIssAuthListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReDocIssAuthListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReDocIssAuthListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
