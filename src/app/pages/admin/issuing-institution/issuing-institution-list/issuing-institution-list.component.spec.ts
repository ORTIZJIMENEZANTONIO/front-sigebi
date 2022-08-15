import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuingInstitutionListComponent } from './issuing-institution-list.component';

describe('IssuingInstitutionListComponent', () => {
  let component: IssuingInstitutionListComponent;
  let fixture: ComponentFixture<IssuingInstitutionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuingInstitutionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuingInstitutionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
