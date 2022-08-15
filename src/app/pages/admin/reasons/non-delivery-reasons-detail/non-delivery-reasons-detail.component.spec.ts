import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonDeliveryReasonsDetailComponent } from './non-delivery-reasons-detail.component';

describe('NonDeliveryReasonsDetailComponent', () => {
  let component: NonDeliveryReasonsDetailComponent;
  let fixture: ComponentFixture<NonDeliveryReasonsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonDeliveryReasonsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonDeliveryReasonsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
