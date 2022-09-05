import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalSupportDetailComponent } from './legal-support-detail.component';

describe('LegalSupportDetailComponent', () => {
  let component: LegalSupportDetailComponent;
  let fixture: ComponentFixture<LegalSupportDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalSupportDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalSupportDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
