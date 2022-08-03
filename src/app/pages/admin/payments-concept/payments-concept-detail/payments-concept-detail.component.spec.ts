import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsConceptDetailComponent } from './payments-concept-detail.component';

describe('PaymentsConceptDetailComponent', () => {
  let component: PaymentsConceptDetailComponent;
  let fixture: ComponentFixture<PaymentsConceptDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsConceptDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsConceptDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
