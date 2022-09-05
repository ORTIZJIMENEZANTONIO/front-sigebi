import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoGoodsTypeSubtypeListComponent } from './info-goods-type-subtype-list.component';

describe('InfoGoodsTypeSubtypeListComponent', () => {
  let component: InfoGoodsTypeSubtypeListComponent;
  let fixture: ComponentFixture<InfoGoodsTypeSubtypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoGoodsTypeSubtypeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoGoodsTypeSubtypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
