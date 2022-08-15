import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOrderServiceDetailComponent } from './type-order-service-detail.component';

describe('TypeOrderServiceDetailComponent', () => {
  let component: TypeOrderServiceDetailComponent;
  let fixture: ComponentFixture<TypeOrderServiceDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeOrderServiceDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeOrderServiceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
