import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoGoodsTypeSubtypeDetailComponent } from './info-goods-type-subtype-detail.component';

describe('InfoGoodsTypeSubtypeDetailComponent', () => {
  let component: InfoGoodsTypeSubtypeDetailComponent;
  let fixture: ComponentFixture<InfoGoodsTypeSubtypeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoGoodsTypeSubtypeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoGoodsTypeSubtypeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
