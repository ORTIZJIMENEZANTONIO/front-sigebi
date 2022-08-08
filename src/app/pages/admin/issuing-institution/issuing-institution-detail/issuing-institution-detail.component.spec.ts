import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuingInstitutionDetailComponent } from './issuing-institution-detail.component';

describe('IssuingInstitutionDetailComponent', () => {
  let component: IssuingInstitutionDetailComponent;
  let fixture: ComponentFixture<IssuingInstitutionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuingInstitutionDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuingInstitutionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
