import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QAccumulatedGoodsDetailComponent } from './q-accumulated-goods-detail.component';

describe('QAccumulatedGoodsDetailComponent', () => {
  let component: QAccumulatedGoodsDetailComponent;
  let fixture: ComponentFixture<QAccumulatedGoodsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QAccumulatedGoodsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QAccumulatedGoodsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
