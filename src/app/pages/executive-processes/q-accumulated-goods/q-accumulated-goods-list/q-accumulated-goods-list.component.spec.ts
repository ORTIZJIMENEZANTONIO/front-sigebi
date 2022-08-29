import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QAccumulatedGoodsListComponent } from './q-accumulated-goods-list.component';

describe('QAccumulatedGoodsListComponent', () => {
  let component: QAccumulatedGoodsListComponent;
  let fixture: ComponentFixture<QAccumulatedGoodsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QAccumulatedGoodsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QAccumulatedGoodsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
