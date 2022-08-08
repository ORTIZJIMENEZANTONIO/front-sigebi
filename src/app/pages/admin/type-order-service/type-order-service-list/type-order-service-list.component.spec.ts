import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOrderServiceListComponent } from './type-order-service-list.component';

describe('TypeOrderServiceListComponent', () => {
  let component: TypeOrderServiceListComponent;
  let fixture: ComponentFixture<TypeOrderServiceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeOrderServiceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeOrderServiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
