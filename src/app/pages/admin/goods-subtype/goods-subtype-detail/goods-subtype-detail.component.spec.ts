import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsSubtypeDetailComponent } from './goods-subtype-detail.component';

describe('GoodsSubtypeDetailComponent', () => {
  let component: GoodsSubtypeDetailComponent;
  let fixture: ComponentFixture<GoodsSubtypeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodsSubtypeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsSubtypeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
