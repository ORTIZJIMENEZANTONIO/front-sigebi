import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeWarehousesListComponent } from './type-warehouses-list.component';

describe('TypeWarehousesListComponent', () => {
  let component: TypeWarehousesListComponent;
  let fixture: ComponentFixture<TypeWarehousesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeWarehousesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeWarehousesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
