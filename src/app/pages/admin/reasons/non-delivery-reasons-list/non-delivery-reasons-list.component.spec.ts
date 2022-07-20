import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonDeliveryReasonsListComponent } from './non-delivery-reasons-list.component';

describe('NonDeliveryReasonsListComponent', () => {
  let component: NonDeliveryReasonsListComponent;
  let fixture: ComponentFixture<NonDeliveryReasonsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonDeliveryReasonsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonDeliveryReasonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
