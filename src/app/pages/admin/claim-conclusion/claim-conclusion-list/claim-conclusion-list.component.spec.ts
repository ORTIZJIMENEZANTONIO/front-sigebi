import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimConclusionListComponent } from './claim-conclusion-list.component';

describe('ClaimConclusionListComponent', () => {
  let component: ClaimConclusionListComponent;
  let fixture: ComponentFixture<ClaimConclusionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimConclusionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimConclusionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
