import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimConclusionDetailComponent } from './claim-conclusion-detail.component';

describe('ClaimConclusionDetailComponent', () => {
  let component: ClaimConclusionDetailComponent;
  let fixture: ComponentFixture<ClaimConclusionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimConclusionDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimConclusionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
