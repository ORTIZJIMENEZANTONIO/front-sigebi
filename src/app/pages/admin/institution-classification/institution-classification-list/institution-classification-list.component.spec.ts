import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionClassificationListComponent } from './institution-classification-list.component';

describe('InstitutionClassificationListComponent', () => {
  let component: InstitutionClassificationListComponent;
  let fixture: ComponentFixture<InstitutionClassificationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionClassificationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionClassificationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
