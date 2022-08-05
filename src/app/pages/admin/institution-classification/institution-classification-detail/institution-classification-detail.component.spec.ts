import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionClassificationDetailComponent } from './institution-classification-detail.component';

describe('InstitutionClassificationDetailComponent', () => {
  let component: InstitutionClassificationDetailComponent;
  let fixture: ComponentFixture<InstitutionClassificationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionClassificationDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionClassificationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
