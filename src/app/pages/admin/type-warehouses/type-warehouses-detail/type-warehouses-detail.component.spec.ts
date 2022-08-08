import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeWarehousesDetailComponent } from './type-warehouses-detail.component';

describe('TypeWarehousesDetailComponent', () => {
  let component: TypeWarehousesDetailComponent;
  let fixture: ComponentFixture<TypeWarehousesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeWarehousesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeWarehousesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
