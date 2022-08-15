import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsConceptListComponent } from './payments-concept-list.component';

describe('PaymentsConceptListComponent', () => {
  let component: PaymentsConceptListComponent;
  let fixture: ComponentFixture<PaymentsConceptListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsConceptListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsConceptListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
